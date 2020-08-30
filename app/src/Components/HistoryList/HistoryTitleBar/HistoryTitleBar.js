import React from "react";
import PropTypes from 'prop-types';
import { TitleBarWrapperStyled, TitleFieldStyled } from './HistoryTitleBar.styled';

const HistoryTitleBar = ({ title1, title2, title3 }) => {
  return (
    <TitleBarWrapperStyled>
      <TitleFieldStyled>{title1}</TitleFieldStyled>
      <TitleFieldStyled>{title2}</TitleFieldStyled>
      <TitleFieldStyled>{title3}</TitleFieldStyled>
    </TitleBarWrapperStyled>
  );
};

HistoryTitleBar.propTypes = {
  date: PropTypes.string,
  amountBefore: PropTypes.string,
  amountAfter: PropTypes.string,
};

export default HistoryTitleBar;
