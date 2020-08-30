import React from "react";
import PropTypes from "prop-types";
import Moment from 'moment';
import {
  HistoryItemStyled,
  HistoryFieldBoxStyled,
  HistoryFieldStyled,
  IconStyled,
  CurrencyStyled,
} from "./HistoryItem.styled";

const HistoryItem = ({ date, amount, convertedAmount, currencyFrom, currencyTo }) => {
  return (
    <HistoryItemStyled>
      <HistoryFieldStyled>{Moment(date).format('MM-DD-YYYY')}</HistoryFieldStyled>
      <HistoryFieldStyled>
        {amount}{'\u00A0'}
        <CurrencyStyled>{currencyFrom}</CurrencyStyled>
      </HistoryFieldStyled>
      <HistoryFieldBoxStyled>
        <IconStyled />
        <HistoryFieldStyled>
          {convertedAmount}{'\u00A0'}
          <CurrencyStyled>{currencyTo}</CurrencyStyled>
        </HistoryFieldStyled>
      </HistoryFieldBoxStyled>
    </HistoryItemStyled>
  );
};

HistoryItem.propTypes = {
};

export default HistoryItem;
