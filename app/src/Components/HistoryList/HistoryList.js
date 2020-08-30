import React from "react";
import HistoryItem from "./HistoryItem";
import HistoryTitleBar from "./HistoryTitleBar";
import { HistoryListStyled } from "./HistoryList.styled";

const HistoryList = ({
  date,
  amountBefore,
  amountAfter,
  currencyBefore,
  currencyAfter,
}) => {
  return (
    <HistoryListStyled>
      <HistoryTitleBar
        title1="Data"
        title2="Przed konwersją"
        title3="Po konwersji"
      />
      <HistoryItem
        date={date}
        amountBefore={amountBefore}
        currencyBefore={currencyBefore}
        amountAfter={amountAfter}
        currencyAfter={currencyAfter}
      />
    </HistoryListStyled>
  );
};

export default HistoryList;
