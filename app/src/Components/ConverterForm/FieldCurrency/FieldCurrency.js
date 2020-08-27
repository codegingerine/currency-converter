import React from "react";
import PropTypes from "prop-types";
import { FieldCurrencyItem } from "./FieldCurrency.styled";

const FieldCurrency = ({ currency, hasError }) => (
  <FieldCurrencyItem hasError={hasError}>{currency}</FieldCurrencyItem>
);

FieldCurrency.propTypes = {
  currency: PropTypes.string.isRequired,
  hasError: PropTypes.bool.isRequired,
};

FieldCurrency.defaultProps = {
  hasError: false
}

export default FieldCurrency;