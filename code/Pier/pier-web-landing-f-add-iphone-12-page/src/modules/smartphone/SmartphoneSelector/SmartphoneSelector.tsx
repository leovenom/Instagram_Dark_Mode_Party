import { useEffect } from "react";

import RenderComponentByStep from "./RenderComponentByStep";
import { useSmartphoneMachine } from "./smartphone-machine";
import { TemplateStructure } from "./components";
import { extractBrandsAndSeries } from "./utils";

const SmartphoneSelector = ({ smartphoneModels, getSelectedDevice }) => {
  useEffect(() => window["dataLayer"]?.push({ event: "smartphone_quote" }), []);

  const { brands, series }: any = extractBrandsAndSeries(smartphoneModels);

  const { actions, state, context } = useSmartphoneMachine({
    brands,
    series,
  });

  return (
    <TemplateStructure>
      <TemplateStructure.Header state={state} backStep={actions.back} />
      <TemplateStructure.Content state={state}>
        <RenderComponentByStep
          actions={actions}
          state={state}
          context={context}
          getSelectedDevice={getSelectedDevice}
        />
      </TemplateStructure.Content>
    </TemplateStructure>
  );
};

export default SmartphoneSelector;
