import React from "react";
import PropTypes from "prop-types";
import { FieldCurrencyItem } from "./FieldCurrency.styled";

const FieldCurrency = ({ currency }) => (
  <FieldCurrencyItem>{currency}</FieldCurrencyItem>
);

FieldCurrency.propTypes = {
  currency: PropTypes.string.isRequired,
};

export default FieldCurrency;