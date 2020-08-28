import React from "react";
import PropTypes from "prop-types";
import Header from "Components/Header";
import { MenuWrapperStyled, MenuStyled } from "./MenuWrapper.styled";

const MenuWrapper = ({ children, closeIcon }) => {
  return (
    <MenuWrapperStyled>
      {children}
      <MenuStyled>
        <Header closeIcon={closeIcon} />
      </MenuStyled>
    </MenuWrapperStyled>
  );
};

MenuWrapper.propTypes = {
  children: PropTypes.any,
  closeIcon: PropTypes.bool,
};

export default MenuWrapper;
