import React from "react";
import ConverterForm from "Components/ConverterForm";
import { ConverterWrapper, ConverterTitle } from "./ConverterBox.styled";

const ConverterBox = () => {
  return (
    <ConverterWrapper>
      <ConverterTitle>Konwerter walut</ConverterTitle>
      <ConverterForm />
    </ConverterWrapper>
  );
};

export default ConverterBox;
