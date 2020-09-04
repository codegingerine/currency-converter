import React from "react";
import PropTypes from "prop-types";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import HistoryItem from "./HistoryItem";
import HistoryTitleBar from "./HistoryTitleBar";
import {
  HistoryWrapperStyled,
  HistoryListStyled,
  HistoryItemsStyled,
  HistoryListClear,
  HistoryNoMsg,
} from "./HistoryList.styled";

const HistoryList = ({
  className,
  mappedList,
  onClearClick,
  showHistory,
  noHistoryMsg,
}) => {
  return (
    <HistoryWrapperStyled showHistory={showHistory} className={className}>
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
          <HistoryNoMsg>Brak historii konwersji walut</HistoryNoMsg>
        )}
        <HistoryListClear
          onClick={onClearClick}
          empty={mappedList.length === 0 ? true : false}
        >
          Wyczyść historię
        </HistoryListClear>
      </HistoryListStyled>
    </HistoryWrapperStyled>
  );
};

HistoryList.propTypes = {
  mappedList: PropTypes.array.isRequired,
  onClearClick: PropTypes.func.isRequired,
  noHistoryMsg: PropTypes.bool.isRequired,
};

HistoryList.defaultProps = {
  noHistoryMsg: false,
};

export default HistoryList;
