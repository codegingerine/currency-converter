import React from "react";
import PropTypes from "prop-types";
import { SelecBoxtWrapper, SelectStyled } from "./FieldSelectBox.styled";

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
    },
    ref
  ) => (
    <SelecBoxtWrapper>
      <SelectStyled name={nameFrom} ref={refFrom} onClick={onClickFrom}>
        <Options currencyOptionsMapped={currencyOptionsMapped} />
      </SelectStyled>
      <SelectStyled name={nameTo} ref={refTo} onClick={onClickTo}>
        <Options currencyOptionsMapped={currencyOptionsMapped} />
      </SelectStyled>
    </SelecBoxtWrapper>
  )
);

FieldSelectBox.propTypes = {
  currencyOptionsMapped: PropTypes.array.isRequired,
  nameFrom: PropTypes.string.isRequired,
  nameTo: PropTypes.string.isRequired,
  refFrom: PropTypes.object.isRequired,
  refTo: PropTypes.object.isRequired,
  onClickFrom: PropTypes.func.isRequired,
  onClickTo: PropTypes.func.isRequired,
};

export default FieldSelectBox;
