import React from 'react';
import PropTypes from 'prop-types';
import { SwitchStyled, SwitchLeftStyled, SwitchRightStyled } from './SwitchData.styled';

const SwitchData = ({ onClick }) => {
  return (
    <SwitchStyled onClick={onClick}>
      <SwitchRightStyled />
      <SwitchLeftStyled />
    </SwitchStyled>
  )
};

SwitchData.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default SwitchData;