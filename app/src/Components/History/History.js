import React from "react";
import HistoryList from "Components/HistoryList";
import { HistoryWrapper } from "./History.styled";

const History = ({ className, showHistory, mappedList, onClearClick, noHistoryMsg }) => {
  return (
    <HistoryWrapper showHistory={showHistory} className={className}>
      <HistoryList mappedList={mappedList} onClearClick={onClearClick} noHistoryMsg={noHistoryMsg} />
    </HistoryWrapper>
  );
};

export default History;
