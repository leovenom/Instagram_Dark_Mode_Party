import styled from "styled-components";

import NotCoveredSection from "./NotCoveredSection";
import CoveredSection from "./CoveredSection";
import Section from "landingPages/sharedSections/Section";

const BlockedSection = styled(Section)`
  display: block;
`;

const QuotationCoveredDetails = () => (
  <BlockedSection bg="white">
    <CoveredSection sourcePage="Quote" displayColumn />
    <NotCoveredSection displayColumn />
  </BlockedSection>
);

export default QuotationCoveredDetails;
