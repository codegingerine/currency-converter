import React from "react";
import MainWrapper from "Components/MainWrapper";
import ConverterForm from "Components/ConverterForm";
import { ConverterWrapper, ConverterTitle } from "./Converter.styled";

const Converter = () => {
  return (
    <MainWrapper>
      <ConverterWrapper>
        <ConverterTitle>Konwerter walut</ConverterTitle>
        <ConverterForm />
      </ConverterWrapper>
    </MainWrapper>
  );
};

export default Converter;
