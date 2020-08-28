import React from "react";
import MainWrapper from "Components/MainWrapper";
import ConverterBox from "Components/ConverterBox";
import { MenuWrapperStyled, HistoryWrapper } from "./History.styled";

const History = () => {
  
  return (
    <MainWrapper>
      <MenuWrapperStyled closeIcon>
        <ConverterBox />
        <HistoryWrapper>

        </HistoryWrapper>
      </MenuWrapperStyled>
    </MainWrapper>
  );
};

export default History;
