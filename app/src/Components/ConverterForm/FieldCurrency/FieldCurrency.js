import React from "react";
import PropTypes from "prop-types";
import { FieldCurrencyItem } from "./FieldCurrency.styled";

// TODO: update currency type chosen with select; remove PLN fallback

const FieldCurrency = ({ callback }) => (
  <FieldCurrencyItem>{callback || `PLN`}</FieldCurrencyItem>
);

FieldCurrency.propTypes = {
  callback: PropTypes.func,
};

export default FieldCurrency;
