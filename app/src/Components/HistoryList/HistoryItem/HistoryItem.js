import React from "react";
import PropTypes from "prop-types";
import {
  HistoryItemStyled,
  HistoryFieldBoxStyled,
  HistoryFieldStyled,
  IconStyled,
  CurrencyStyled,
} from "./HistoryItem.styled";

const HistoryItem = ({ date, amountBefore, amountAfter, currencyBefore, currencyAfter }) => {
  return (
    <HistoryItemStyled>
      <HistoryFieldStyled>{date}</HistoryFieldStyled>
      <HistoryFieldStyled>
        {amountBefore}{'\u00A0'}
        <CurrencyStyled>{currencyBefore}</CurrencyStyled>
      </HistoryFieldStyled>
      <HistoryFieldBoxStyled>
        <IconStyled />
        <HistoryFieldStyled>
          {amountAfter}{'\u00A0'}
          <CurrencyStyled>{currencyAfter}</CurrencyStyled>
        </HistoryFieldStyled>
      </HistoryFieldBoxStyled>
    </HistoryItemStyled>
  );
};

HistoryItem.propTypes = {
};

export default HistoryItem;
