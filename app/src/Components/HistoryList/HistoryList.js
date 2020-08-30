import React from "react";
import PropTypes from 'prop-types';
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import HistoryItem from "./HistoryItem";
import HistoryTitleBar from "./HistoryTitleBar";
import {
  HistoryListStyled,
  HistoryItemsStyled,
  HistoryListClear,
  HistoryNoMsg,
} from "./HistoryList.styled";

const HistoryList = ({ mappedList, onClearClick, noHistoryMsg }) => {
  return (
    <HistoryListStyled>
      <HistoryTitleBar
        title1="Data"
        title2="Przed konwersją"
        title3="Po konwersji"
      />
      <HistoryItemsStyled>
        <PerfectScrollbar>
          {mappedList.map(
            ({
              date,
              amount,
              convertedAmount,
              currencyFrom,
              currencyTo,
              id,
            }) => (
              <HistoryItem
                key={id}
                date={date}
                amount={amount}
                currencyFrom={currencyFrom}
                convertedAmount={convertedAmount}
                currencyTo={currencyTo}
              />
            )
          )}
        </PerfectScrollbar>
      </HistoryItemsStyled>
      {noHistoryMsg && (
        <HistoryNoMsg >
          Brak historii konwersji walut
        </HistoryNoMsg>
      )}
      <HistoryListClear onClick={onClearClick}>
        Wyczyść historię
      </HistoryListClear>
    </HistoryListStyled>
  );
};

HistoryList.propTypes = {
  mappedList: PropTypes.array.isRequired,
  onClearClick: PropTypes.func.isRequired,
  noHistoryMsg: PropTypes.bool.isRequired,
}

HistoryList.defaultProps = {
  noHistoryMsg: false
}

export default HistoryList;
