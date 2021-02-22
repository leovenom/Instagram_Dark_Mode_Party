import { useState, useEffect } from "react";
import styled from "styled-components";
import { useFormik } from "formik";

import breakpoints from "ui/theme/breakpoints";
import Autosuggest from "ui/AutoSuggest";
import RoundedButton from "ui/RoundedButton";

import { autoTracker } from "helpers/mixpanelTracker";
import withServiceMachine from "modules/auto/QuotationFlow/stateMachine/withServiceMachine";
import canItBeANewCar from "modules/auto/QuotationFlow/utils/canItBeAnewCar";
import { carModelValidation } from "modules/auto/QuotationFlow/validations/validationSchema";
import StepsTemplate from "modules/auto/QuotationFlow/components/StepsTemplate";
import getBrands from "services/auto/brands";
import getModels from "services/auto/models";
import quoteApi from "services/auto/quote";
import { STEPS_CONFIG } from "modules/auto/QuotationFlow/utils/constants";

const BASE_TRACKING_NAME = "CarModel";

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;

  ${breakpoints.desktop} {
    position: relative;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 80px;
`;

const makeBrands = (brands) =>
  brands?.length
    ? brands.map((brand) => ({ label: brand.attributes.name, value: brand }))
    : [];

const makeYears = (years) =>
  years?.length
    ? years.map((year) => ({ label: year.toString(), value: year }))
    : [];

const makeModels = (models) =>
  models?.length
    ? models.map((model) => ({ label: model.attributes.model, value: model }))
    : [];

const sortBrands = (brands) => {
  return brands.sort((a, b) => {
    if (a.attributes.highlight === b.attributes.highlight) return 0;

    return a.attributes.highlight ? -1 : 1;
  });
};

const CarModel = ({ quotationValues, machineActions }) => {
  const { isLoading, formData, step } = quotationValues;
  const [availableYears, setAvailableYears] = useState([]);
  const [availableModels, setAvailableModels] = useState([]);
  const [availableBrands, setAvailableBrands] = useState([]);
  const [fetchModelsError, setFetchModelsError] = useState<boolean>(false);
  const [fetchBrandsError, setFetchBrandsError] = useState<boolean>(false);

  const gotDataFromInfoCar =
    formData.licensePlate !== "" &&
    formData.brand !== null &&
    formData.year !== null;

  const initialValues = {
    brand: formData.brand || null,
    year: formData.year || null,
    model: formData?.model || null,
    modelOptions: formData?.modelOptions || null,
  };

  const { handleSubmit, isValid, setFieldValue, values } = useFormik({
    initialValues,
    validationSchema: carModelValidation,
    validateOnMount: true,
    onSubmit: async (values) => {
      const trackingProps = {
        makeName: values.brand.label,
        modelName: values.model.label,
        modelYear: values.year.value,
      };
      autoTracker.trackButton(`${BASE_TRACKING_NAME} Continue`, trackingProps);

      machineActions.submit();
      try {
        const res = await quoteApi.createQuote({
          itemId: values?.model.value.attributes.id,
          licensePlate: formData?.licensePlate,
          quoteId: formData?.quoteId,
        });
        autoTracker.trackTransactionConfirmed(
          `${BASE_TRACKING_NAME} Quote Creation`,
          { quoteId: res?.data?.id }
        );

        const data = {
          quoteId: res?.data?.id,
          brand: values.brand,
          year: values.year,
          model: values.model,
        };
        if (canItBeANewCar(values.year?.value)) {
          return machineActions.success(data);
        }

        return machineActions.skip(data);
      } catch (error) {
        const msg = "Não foi possivel continuar com o processo agora.";
        autoTracker.trackError(`${BASE_TRACKING_NAME} Quote Creation`, msg);
        machineActions.error(msg);
      }
    },
  });

  const { brand, year, model, modelOptions } = values;

  useEffect(() => {
    autoTracker.trackScreen(BASE_TRACKING_NAME);
  }, []);

  useEffect(() => {
    if (brand?.label && availableBrands?.length) {
      const findDetailedBrandByTag = (tag) =>
        availableBrands.find(({ attributes }) => attributes.tag === tag) || [];
      const detailedBrand = brand.value?.attributes?.years
        ? brand.value
        : findDetailedBrandByTag(brand?.value?.attributes.tag);
      const brandAvailableYears = detailedBrand?.attributes?.years;

      const reversedYearsList = brandAvailableYears?.reverse();
      setAvailableYears(reversedYearsList);
    }
  }, [brand, availableBrands]);

  useEffect(() => {
    const fetchAvailableBrands = async () => {
      const { url, options } = getBrands();
      const res = await fetch(url, options);
      if (res.status !== 200) {
        setFetchBrandsError(true);
        return;
      }
      const data = await res.json();
      setAvailableBrands(sortBrands(data.data));
    };

    fetchAvailableBrands();
  }, []);

  useEffect(() => {
    const shouldUseLicensePlateModelOptions =
      !availableModels?.length && modelOptions?.length;
    if (shouldUseLicensePlateModelOptions) {
      setAvailableModels(modelOptions);
      return;
    }

    if (brand && year) {
      const fetchAvailableModels = async () => {
        const { url, options } = getModels(
          brand?.value?.attributes.tag,
          year?.value
        );
        const res = await fetch(url, options);
        if (res.status !== 200) {
          setFetchModelsError(true);
          return;
        }
        const data = await res.json();
        setAvailableModels(data.data);
      };
      fetchAvailableModels();
    }
  }, [brand, year]);

  const onSelectFieldModel = (item) => {
    const model = {
      label: item.label,
      value: {
        attributes: {
          id: item.value.id,
          model: item.label,
        },
      },
    };

    setFieldValue("model", model);
  };

  const onSelectFieldBrand = (item) => {
    setFieldValue("brand", item);
    setFieldValue("model", null);
    setFieldValue("year", null);
  };

  const onSelectFieldYear = (item) => {
    setFieldValue("year", item);
    setFieldValue("model", null);
  };

  return (
    <StepsTemplate title={STEPS_CONFIG.CAR_MODEL.TITLE}>
      <Form onSubmit={handleSubmit}>
        <Autosuggest
          label="Fabricante"
          title="Selecione o Fabricante"
          suggestions={makeBrands(availableBrands)}
          fetchError={fetchBrandsError}
          onSelectSuggestion={onSelectFieldBrand}
          selectedValue={brand}
          placeholder="Selecione o fabricante"
          id="brand"
          notFoundPlaceholder="Fabricante não encontrado"
          page={BASE_TRACKING_NAME}
          disabled={gotDataFromInfoCar}
        />
        <Autosuggest
          label="Ano do Modelo"
          title="Selecione o Ano"
          suggestions={makeYears(availableYears)}
          onSelectSuggestion={onSelectFieldYear}
          selectedValue={year}
          placeholder="Insira o ano"
          inputType="tel"
          id="year"
          notFoundPlaceholder="Ano não encontrado para o fabricante"
          page={BASE_TRACKING_NAME}
          disabled={!brand || gotDataFromInfoCar}
        />
        <Autosuggest
          label="Versão do Modelo"
          title="Selecione o Modelo"
          suggestions={makeModels(availableModels)}
          fetchError={fetchModelsError}
          onSelectSuggestion={onSelectFieldModel}
          selectedValue={model}
          placeholder="Selecione a versão do modelo"
          disabled={!year}
          id="model"
          notFoundPlaceholder="Versão do modelo não encontrada"
          page={BASE_TRACKING_NAME}
        />

        <ButtonContainer>
          <RoundedButton
            type="submit"
            variant="secondary"
            isLoading={isLoading}
            disabled={!isValid || isLoading}
            fullWidth
          />
        </ButtonContainer>
      </Form>
    </StepsTemplate>
  );
};

export default withServiceMachine(CarModel);
