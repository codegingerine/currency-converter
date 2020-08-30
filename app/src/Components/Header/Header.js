import React from "react";
import PropTypes from "prop-types";
import MenuItem from "./MenuItem";
import { HeaderStyled, NavStyled, MenuStyled, Close } from "./Header.styled";

const Header = ({ closeIcon, onIconClick, onListClick }) => {
  return (
    <HeaderStyled>
      <NavStyled>
        <MenuStyled>
        {closeIcon &&
          <MenuItem
            exact
            to="/"
            icon={<Close />}
            closeIcon={closeIcon}
            onClick={onIconClick}
          />
        }

          <MenuItem
            smooth
            to="/#history"
            label="History"
            onClick={onListClick}
          />
        </MenuStyled>
      </NavStyled>
    </HeaderStyled>
  );
};

Header.propTypes = {
  closeIcon: PropTypes.bool,
  onIconClick: PropTypes.func,
  onListClick: PropTypes.func,
};

Header.defaultProps = {
  closeIcon: false,
};

export default Header;
