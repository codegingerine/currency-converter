import React from "react";
import MainWrapper from "Components/MainWrapper";
import MenuWrapper from "Components/MenuWrapper";
import ConverterBox from "Components/ConverterBox";
import {} from "./History.styled";

const History = () => {
  return (
    <MainWrapper>
      <MenuWrapper closeIcon>
        <ConverterBox />
      </MenuWrapper>
    </MainWrapper>
  );
};

export default History;
