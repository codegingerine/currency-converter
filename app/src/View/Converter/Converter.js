import React, { useState } from "react";
import Header from "Components/Header";
import MainWrapper from "Components/MainWrapper";
import ConverterForm from "Components/ConverterForm";
import {
  ConverterWrapperStyled,
} from "./Converter.styled";

const Converter = () => {
  const [isListOpen, setIsListOpen] = useState(false);

  const handleListOpen = (e) => {
    e.preventDefault();
    setIsListOpen(true);
  };

  const handleListClose = (e) => {
    e.preventDefault();
    setIsListOpen(false);
  };

  return (
    <MainWrapper>
      <ConverterWrapperStyled showHistory={!isListOpen}>
        <ConverterForm title="Kalkulator walut" showHistory={!isListOpen} />
        <Header
          onListClick={handleListOpen}
          closeIcon={isListOpen}
          onIconClick={handleListClose}
        />
      </ConverterWrapperStyled>
    </MainWrapper>
  );
};

export default Converter;
