import React from 'react';
import PropTypes from 'prop-types';
import { SwitchStyled, SwitchLeftStyled, SwitchRightStyled } from './SwitchData.styled';

const SwitchData = ({ onClick, swapArrows }) => {
  return (
    <SwitchStyled onClick={onClick} swapArrows={swapArrows}>
      <SwitchRightStyled />
      <SwitchLeftStyled />
    </SwitchStyled>
  )
};

SwitchData.propTypes = {
  onClick: PropTypes.func.isRequired,
  swapArrows: PropTypes.bool,
};

SwitchData.defaultProps = {
  swapArrows: false
}

export default SwitchData;