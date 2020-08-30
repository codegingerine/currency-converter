import React from "react";
import HistoryList from "Components/HistoryList";
import { HistoryWrapper } from "./History.styled";

const History = ({ className, showHistory, mappedList }) => {
  return (
    <HistoryWrapper showHistory={showHistory} className={className}>
      <HistoryList mappedList={mappedList} />
    </HistoryWrapper>
  );
};

export default History;
