import { useState, useMemo, useRef, useEffect } from "react";
import * as React from "react";
import styled, { css } from "styled-components";

import { font } from "ui/theme/typography";
import Icon from "ui/Icon";
import CustomizedIcon from "ui/Icon/CustomizedIcon";
import CircularProgress from "ui/CircularProgress";
import Modal from "ui/Modal";
import Text from "ui/Text";

import slugify from "helpers/slugify";
import { autoTracker } from "helpers/mixpanelTracker";
import useModal from "hooks/useModal";
import { capitalize } from "helpers/stringUtils";

const Container = styled.button`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  padding: 4px 0 8px;

  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid
    ${({ theme, disabled }) =>
      disabled ? theme.colors.gray400 : theme.colors.gray};

  background: ${({ theme }) => theme.colors.white};

  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.gray600};
  position: relative;
  svg {
    position: absolute;
    right: 16px;
  }

  margin-bottom: 24px;

  ${({ theme }) => theme.styles.formElementFocus};
`;

const SelectedValue = styled.p<{ hasValue?: boolean }>`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  padding: 0;
  max-width: calc(100% - 16px);

  ${({ hasValue, theme }) =>
    !hasValue &&
    css`
      color: ${theme.colors.gray};
    `}
`;

const SuggestionList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  overflow: auto;
  padding: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.gray400};

  li {
    height: 56px;
  }
`;

const SuggestionItem = styled.li<{ selected?: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  svg {
    transform: rotate(-90deg);
  }

  ${({ selected }) =>
    selected &&
    css`
      background: ${({ theme }) => theme.colors.gray400};
    `}
`;

const SuggestionContent = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 17px;
  line-height: 24px;
  padding: 16px 0;
`;

const Label = styled.label`
  font-size: 13px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.gray600};
  margin: 0;
`;

const AutosuggestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow: auto;
  margin: 0 -20px;
`;

const ResultNotFound = styled.div`
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray600};
  font-size: 17px;
  line-height: 24px;
  padding-top: 16px;
`;

const SuggestInputContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 90px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  margin: 0 24px;

  svg {
    margin-right: 8px;
  }
`;

const CustomInput = styled.input`
  font-family: ${font.primary};
  border: none;
  min-width: 85%;
  font-size: 16px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.text};
  outline: 0;
`;

const CircularProgressContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ENTER_KEY = 13;

interface Props {
  suggestions: { label: string; value: any }[];
  onSelectSuggestion: any;
  fetchError?: boolean;
  selectedValue: any;
  placeholder?: string;
  label: string;
  title: string;
  inputType?: string;
  disabled?: boolean;
  notFoundPlaceholder?: string;
  id: string;
  page: string;
}

const Autosuggest = ({
  suggestions,
  onSelectSuggestion,
  selectedValue,
  fetchError,
  placeholder,
  label,
  title,
  inputType,
  disabled,
  id,
  notFoundPlaceholder = "Resultado não encontrado",
  page,
}: Props) => {
  const { isOpen, toggle } = useModal();
  const [typedValue, setTypedValue] = useState("");
  const [highlightedValue, setHighlightedValue] = useState<any>("");

  const refInput = useRef(null);
  const refButton = useRef(null);

  const isValueSelected = !!(selectedValue && selectedValue.label);

  const filteredSuggestions = useMemo(
    () =>
      suggestions.length
        ? suggestions.filter((suggestion) =>
            slugify(suggestion.label).includes(slugify(typedValue))
          )
        : [],
    [typedValue, suggestions]
  );

  const notFoundResults = suggestions.length && !filteredSuggestions.length;

  useEffect(() => {
    if (isOpen && refInput && refInput.current) {
      refInput.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const highlightFirstSuggestion = () => {
      setHighlightedValue((prevState) => filteredSuggestions[0]);
    };

    if (filteredSuggestions.length) highlightFirstSuggestion();
  }, [filteredSuggestions]);

  const onClose = () => {
    toggle();

    setTimeout(() => {
      refButton.current.focus();
    }, 100);
  };

  const handleSelectValue = (value) => {
    autoTracker.track(`${page} ${capitalize(id)} Suggestion Value Selected`, {
      value: value.label,
    });
    onSelectSuggestion(value);
    setHighlightedValue("");
    onClose();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.keyCode === ENTER_KEY) {
      handleSelectValue(filteredSuggestions[0]);
    }
  };

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypedValue(event.target.value);

    if (!event.target.value) setHighlightedValue("");
  };

  const openSuggestionModal = () => {
    autoTracker.trackModal(`${page} ${capitalize(id)} Suggestion`);
    toggle();
  };

  const renderModalContent = () => {
    if (fetchError) {
      return (
        <Text variant="bodyLarge" color="danger" mt={200} align="center">
          Tivemos um erro ao restagar essas informações. Atualize a página e
          tente novamente.
        </Text>
      );
    }

    if (!suggestions.length)
      return (
        <CircularProgressContainer>
          <CircularProgress size={32} color="gray" bgColor="gray200" />
        </CircularProgressContainer>
      );

    return (
      <AutosuggestWrapper>
        <SuggestInputContainer>
          <Icon name="search" fill="gray" />
          <CustomInput
            onKeyDown={handleKeyDown}
            ref={refInput}
            value={typedValue}
            placeholder="Buscar"
            type={inputType || "text"}
            onChange={handleChangeValue}
          />
        </SuggestInputContainer>
        <SuggestionList role="listbox">
          {notFoundResults && (
            <ResultNotFound>{notFoundPlaceholder}</ResultNotFound>
          )}

          {filteredSuggestions.map((suggestion, index) => (
            <SuggestionItem
              role="option"
              aria-selected={typedValue && !index}
              selected={highlightedValue?.label === suggestion.label}
              key={JSON.stringify(suggestion)}
              onClick={() => handleSelectValue(suggestion)}
              onMouseOver={() => setHighlightedValue(suggestion)}
            >
              <div>
                <SuggestionContent>{suggestion.label}</SuggestionContent>
                <CustomizedIcon name="thinChevronDown" />
              </div>
            </SuggestionItem>
          ))}
        </SuggestionList>
      </AutosuggestWrapper>
    );
  };

  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Container
        id={id}
        role="button"
        type="button"
        ref={refButton}
        aria-haspopup="true"
        onClick={openSuggestionModal}
        disabled={disabled}
        tabIndex={0}
      >
        <SelectedValue hasValue={isValueSelected}>
          {selectedValue ? selectedValue.label : placeholder}
        </SelectedValue>
        <Icon name="select" fill={disabled ? "gray400" : "primary"} size={12} />
      </Container>

      <Modal
        mobileFullScreen
        title={title}
        contentLabel="Lista de fabricantes"
        noTitleBorder
        isOpen={isOpen}
        hide={onClose}
      >
        {renderModalContent()}
      </Modal>
    </>
  );
};

export default Autosuggest;
