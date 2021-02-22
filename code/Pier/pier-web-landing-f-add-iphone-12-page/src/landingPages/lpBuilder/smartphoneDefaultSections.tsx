import InsuredItems from "landingPages/sharedSections/InsuredItems";
import data from "landingPages/smartphone/data";
import FastRefund from "landingPages/smartphone/sections/FastRefund";
import FrequentlyAskedQuestions from "landingPages/sharedSections/FrequentlyAskedQuestions";

enum SmartphoneVariants {
  Covered = 1,
  NotCovered = 2,
  FastRefund = 3,
  FrequentlyAskedQuestions = 4,
}

function smartphoneDefaultSections(variant: SmartphoneVariants) {
  switch (variant) {
    case SmartphoneVariants.Covered:
      return (
        <InsuredItems
          title="Coberturas"
          description="O que cobrimos"
          covered
          insuredItems={data.insuredItems}
        />
      );
    case SmartphoneVariants.NotCovered:
      return (
        <InsuredItems
          title="O que não cobrimos"
          subtitle="Transparência em 1º lugar! Confira os itens que não estão inclusos em nossa cobertura:"
          bgColor="gray200"
          covered={false}
          insuredItems={data.notInsuredItems}
        />
      );
    case SmartphoneVariants.FastRefund:
      return <FastRefund />;
    case SmartphoneVariants.FrequentlyAskedQuestions:
      return (
        <FrequentlyAskedQuestions
          product="smartphone"
          questions={data.faq.questions}
        />
      );
    default:
      return null;
  }
}

export default smartphoneDefaultSections;
