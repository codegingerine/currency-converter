import React from "react";
import HistoryList from "Components/HistoryList";
import { HistoryWrapper } from "./History.styled";

const History = ({ className, showHistory, mappedList, onClearClick }) => {
  return (
    <HistoryWrapper showHistory={showHistory} className={className}>
      <HistoryList mappedList={mappedList} onClearClick={onClearClick}/>
    </HistoryWrapper>
  );
};

export default History;
