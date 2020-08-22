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
      initialValueFrom,
      initialValueTo,
      refFrom,
      refTo,
      onClickFrom,
      onClickTo,
    },
    ref
  ) => (
    <SelecBoxtWrapper>
      <SelectStyled
        name="convert from"
        initialValue={initialValueFrom}
        ref={refFrom}
        onClick={onClickFrom}
      >
        <Options currencyOptionsMapped={currencyOptionsMapped} />
      </SelectStyled>
      <SelectStyled
        name="convert to"
        initialValue={initialValueTo}
        ref={refTo}
        onClick={onClickTo}
      >
        <Options currencyOptionsMapped={currencyOptionsMapped} />
      </SelectStyled>
    </SelecBoxtWrapper>
  )
);

FieldSelectBox.propTypes = {
  currencyOptionsMapped: PropTypes.array.isRequired,
  initialValueFrom: PropTypes.string,
  initialValueTo: PropTypes.string,
  refFrom: PropTypes.object.isRequired,
  refTo: PropTypes.object.isRequired,
  onClickFrom: PropTypes.func.isRequired,
  onClickTo: PropTypes.func.isRequired,
};

export default FieldSelectBox;
