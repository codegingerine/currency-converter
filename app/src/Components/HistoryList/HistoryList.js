import React from "react";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from "react-perfect-scrollbar";
import HistoryItem from "./HistoryItem";
import HistoryTitleBar from "./HistoryTitleBar";
import { HistoryListStyled, HistoryItemsStyled, HistoryListClear } from "./HistoryList.styled";

const HistoryList = ({ mappedList, onClearClick }) => {
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
      <HistoryListClear onClick={onClearClick}>Wyczyść historię</HistoryListClear>
    </HistoryListStyled>
  );
};

export default HistoryList;
