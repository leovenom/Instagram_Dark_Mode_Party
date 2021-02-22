import { useEffect } from "react";

import { BrandItem, TemplateStructure } from "../components";
import { withModalManagementActions } from "modules/shared/ModalManagement";
import { smartphoneTracker } from "helpers/mixpanelTracker";
import AnotherModelForm from "modules/shared/AnotherModelForm";

import { sortByPriority } from "../utils";
import { BrandsList, AnotherBrandLink } from "../styles";

const Brands = ({ context, selectBrand, openModal }) => {
  useEffect(() => {
    smartphoneTracker.trackScreen("ChooseBrand");
  }, []);

  const { allDevices } = context;
  const brandsList = Object.values(allDevices.brands);

  const handleOpenWaitingListModal = () => {
    smartphoneTracker.trackLink("ChooseBrand Other Brand");
    openModal({
      id: "another-model-form",
      isFullScreen: false,
      component: <AnotherModelForm />,
    });
  };

  return (
    <>
      <TemplateStructure.Title testId="brand-step">
        <strong>Qual a marca?</strong>
      </TemplateStructure.Title>
      <BrandsList>
        {brandsList
          .sort(sortByPriority)
          .map((brand: { name: string; priority: number }) => (
            <BrandItem
              key={brand.name}
              brand={brand.name}
              selectBrand={selectBrand}
            />
          ))}
      </BrandsList>
      <AnotherBrandLink withArrow onClick={handleOpenWaitingListModal}>
        Outra marca
      </AnotherBrandLink>
    </>
  );
};

export default withModalManagementActions(Brands);
