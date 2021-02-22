import { Fragment, useState, useEffect } from "react";
import { motion } from "framer-motion";

import { recalculateCurrency } from "helpers/mathUtils";
import Divider from "ui/Divider";
import Icon from "ui/Icon";
import Switcher from "ui/ABSwitcher";
import Text from "ui/Text";
import colors from "ui/theme/colors";
import {
  OptionalAddLabel,
  OptionalContainer,
  OptionalContent,
  OptionalDescription,
  OptionalPrice,
  OptionalSwitchContainer,
  OptionalTitle,
  Section,
} from "./styles/Optionals";
import { OPTIONALS } from "../LandingPage";

interface Props {
  addOptional: (
    description: string,
    priceInCents: number,
    optionalLabel: string
  ) => void;
  removeOptional: (label: string, optionalLabel) => void;
  assistanceWithUnlimitedKm: boolean;
}

function Optionals({
  addOptional,
  removeOptional,
  assistanceWithUnlimitedKm,
}: Props) {
  const [selectedOptionals, setSelectedOptionals] = useState({
    unlimitedKm: false,
  });

  useEffect(() => {
    setSelectedOptionals((state) => ({
      ...state,
      unlimitedKm: assistanceWithUnlimitedKm,
    }));
  }, [assistanceWithUnlimitedKm]);

  const getAnimationState = (isSwitcherOn: boolean): "on" | "off" =>
    isSwitcherOn ? "on" : "off";

  function toggleOptionalOnQuoteCard(param: string, isSwitcherOn: boolean) {
    const { quoteCardLabel, priceInCents, optionalLabel } = OPTIONALS.filter(
      ({ optionalLabel }) => optionalLabel === param
    )[0];

    isSwitcherOn
      ? addOptional(quoteCardLabel, priceInCents, optionalLabel)
      : removeOptional(quoteCardLabel, optionalLabel);
  }

  function toggleOptional(param: string) {
    return function () {
      const newStateValue = !selectedOptionals[param];

      setSelectedOptionals((state) => ({
        ...state,
        [param]: newStateValue,
      }));

      toggleOptionalOnQuoteCard(param, newStateValue);
    };
  }

  return (
    <Section>
      <Text variant="sectionSmall" bold mb={32}>
        Coberturas opcionais
      </Text>

      {OPTIONALS.map(function (
        { title, icon, optionalLabel, priceInCents, description },
        index
      ) {
        const switcherState = selectedOptionals[optionalLabel];

        return (
          <Fragment key={title}>
            <OptionalContainer>
              <Icon name={icon} fill="secondary" size={32} />

              <OptionalContent>
                <OptionalTitle variant="bodyLarge" bold>
                  {title}
                </OptionalTitle>
                <OptionalSwitchContainer>
                  <Switcher
                    getAnimationState={getAnimationState}
                    switcherState={switcherState}
                    toggle={toggleOptional(optionalLabel)}
                  />
                </OptionalSwitchContainer>
                <OptionalAddLabel variant="body">
                  Adicione por:
                </OptionalAddLabel>
                <OptionalPrice variant="body" bold>
                  <motion.span
                    animate={getAnimationState(switcherState)}
                    variants={{
                      off: { color: colors.primary },
                      on: { color: colors.success },
                    }}
                  >
                    + {recalculateCurrency(priceInCents, 1)}
                  </motion.span>
                </OptionalPrice>
                <OptionalDescription variant="body" color="gray600">
                  {description}
                </OptionalDescription>
              </OptionalContent>
            </OptionalContainer>
            {index + 1 < OPTIONALS.length && <Divider mt={32} mb={32} />}
          </Fragment>
        );
      })}
    </Section>
  );
}

export default Optionals;
