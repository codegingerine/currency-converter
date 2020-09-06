import React, { useState } from "react";
import MainWrapper from "Components/MainWrapper";
import ConverterForm from "Components/ConverterForm";
import {
  ConverterWrapperStyled,
  HeaderStyled,
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
        <HeaderStyled
          onListClick={handleListOpen}
          closeIcon={isListOpen}
          onIconClick={handleListClose}
        />
      </ConverterWrapperStyled>
    </MainWrapper>
  );
};

export default Converter;
