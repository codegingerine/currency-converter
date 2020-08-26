import React from "react";
import PropTypes from "prop-types";
import SwitchData from "./SwitchData";
import { SelectBoxtWrapper, SelectStyled } from "./FieldSelectBox.styled";

const Options = ({ currencyOptionsMapped }) => (
  <>
    {currencyOptionsMapped.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </>
);

const FieldSelectBox = React.forwardRef(
  (
    {
      currencyOptionsMapped,
      nameFrom,
      nameTo,
      refFrom,
      refTo,
      onClickFrom,
      onClickTo,
      onClickSwitch
    },
    ref
  ) => (
    <SelectBoxtWrapper>
      <SelectStyled
        name={nameFrom}
        ref={refFrom}
        onClick={onClickFrom}
      >
        <Options currencyOptionsMapped={currencyOptionsMapped} />
      </SelectStyled>
      <SwitchData onClick={onClickSwitch} />
      <SelectStyled
        name={nameTo}
        ref={refTo}
        onClick={onClickTo}
      >
        <Options currencyOptionsMapped={currencyOptionsMapped} />
      </SelectStyled>
    </SelectBoxtWrapper>
  )
);

FieldSelectBox.propTypes = {
  currencyOptionsMapped: PropTypes.array.isRequired,
  nameFrom: PropTypes.string.isRequired,
  nameTo: PropTypes.string.isRequired,
  refFrom: PropTypes.object,
  refTo: PropTypes.object,
  onClickFrom: PropTypes.func.isRequired,
  onClickTo: PropTypes.func.isRequired,
  onClickSwitch: PropTypes.func.isRequired,
};

export default FieldSelectBox;
