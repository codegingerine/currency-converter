import React from "react";
import PropTypes from "prop-types";
import {
  MenuItemStyled,
  NavLinkRouterStyled,
  LabelStyled,
} from "./MenuItem.styled";

const MenuItem = ({ exact, to, label, icon }) => {
  return (
    <MenuItemStyled>
      <NavLinkRouterStyled exact={exact} to={to}>
        {label && <LabelStyled>{label}</LabelStyled>}
        {icon && icon}
      </NavLinkRouterStyled>
    </MenuItemStyled>
  );
};

MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  label: PropTypes.string,
  icon: PropTypes.object,
};

export default MenuItem;
