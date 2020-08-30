import React from "react";
import HistoryList from "Components/HistoryList";
import { HistoryWrapper } from "./History.styled";

const History = ({
  date,
  amountBefore,
  amountAfter,
  currencyBefore,
  currencyAfter,
  showHistory,
  className
}) => {
  return (
    <HistoryWrapper showHistory={showHistory} className={className}>
      <HistoryList
        date={date}
        amountBefore={amountBefore}
        currencyBefore={currencyBefore}
        amountAfter={amountAfter}
        currencyAfter={currencyAfter}
      />
    </HistoryWrapper>
  );
};

export default History;
