import React from "react";
import MainWrapper from "Components/MainWrapper";
import MenuWrapper from "Components/MenuWrapper";
import ConverterBox from "Components/ConverterBox";

const Converter = () => {
  return (
    <MainWrapper>
      <MenuWrapper>
        <ConverterBox />
      </MenuWrapper>
    </MainWrapper>
  );
};

export default Converter;
