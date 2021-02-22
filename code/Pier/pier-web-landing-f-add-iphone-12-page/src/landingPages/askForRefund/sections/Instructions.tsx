import * as React from "react";
import { Smartphone, Auto } from "../components/Instructions";

interface InstructionsProps {
  product: string;
  isEmbedded: boolean;
}

const Instructions: React.FC<InstructionsProps> = ({
  product = "auto",
  isEmbedded = false,
}) => {
  if (product === "auto") {
    return <Auto isEmbedded={isEmbedded} />;
  }

  return <Smartphone isEmbedded={isEmbedded} />;
};

export default Instructions;
