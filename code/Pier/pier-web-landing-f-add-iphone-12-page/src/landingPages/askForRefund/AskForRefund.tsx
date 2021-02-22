import { useEffect } from "react";
import * as React from "react";

import PierLandingLayout from "layouts/PierLandingLayout";
import HeroCenteredContent from "landingPages/sharedSections/heroSections/HeroCenteredContent";
import Tabs from "ui/Tabs";
import data from "./data";
import Instructions from "./sections/Instructions";
import { TabsContainer } from "./style";

interface AskForRefundProps {
  product?: "auto" | "smartphone";
  isEmbedded?: boolean;
}

const AskForRefund: React.FC<AskForRefundProps> = ({
  product = "smartphone",
  isEmbedded = false,
}) => {
  const [selectedProduct, selectTab] = React.useState(product);

  useEffect(() => {
    if (product) {
      selectTab(product);
    }
  }, [product]);

  return (
    <PierLandingLayout
      pageTitle="Pier - Pedir reembolso"
      canonicalLink="https://www.pier.digital/pedir-reembolso"
      noHeader={isEmbedded}
      noFooter={isEmbedded}
    >
      <HeroCenteredContent
        bg="yellow400"
        title={data.mainContent.title}
        subtitle={data.mainContent.subtitle}
        imageSrc={data.mainContent.imageSrc}
        imageDescription={data.mainContent.imageDescription}
        withMarginTop={!isEmbedded}
      >
        <TabsContainer>
          <Tabs>
            <Tabs.Item
              customClick={() => selectTab("smartphone")}
              defaultActive={selectedProduct === "smartphone"}
            >
              {data.tabs.smartphone}
            </Tabs.Item>
            <Tabs.Item
              customClick={() => selectTab("auto")}
              defaultActive={selectedProduct === "auto"}
            >
              {data.tabs.auto}
            </Tabs.Item>
          </Tabs>
        </TabsContainer>
      </HeroCenteredContent>

      <Instructions product={selectedProduct} isEmbedded={isEmbedded} />
    </PierLandingLayout>
  );
};

export default AskForRefund;
