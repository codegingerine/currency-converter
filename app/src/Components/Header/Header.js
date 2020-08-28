import React from "react";
import PropTypes from "prop-types";
import MenuItem from "./MenuItem";
import { HeaderStyled, NavStyled, MenuStyled, Close } from "./Header.styled";

const Header = ({ closeIcon }) => {
  return (
    <HeaderStyled>
      <NavStyled>
        <MenuStyled>
          {closeIcon && (
            <MenuItem exact to="/" icon={<Close />} closeIcon={closeIcon} />
          )}
          <MenuItem to="/history" label="History" />
        </MenuStyled>
      </NavStyled>
    </HeaderStyled>
  );
};

Header.propTypes = {
  closeIcon: PropTypes.bool,
};

Header.defaultProps = {
  closeIcon: false,
};

export default Header;
