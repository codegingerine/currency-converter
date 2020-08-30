import React from "react";
import PropTypes from "prop-types";
import { MainStyled, MainContentStyled } from "./MainWrapper.styled";

const MainWrapper = ({ children, className }) => {
  return (
    <MainStyled className={className}>
      <MainContentStyled>{children}</MainContentStyled>
    </MainStyled>
  );
};

MainWrapper.propTypes = {
  children: PropTypes.any,
};

export default MainWrapper;
