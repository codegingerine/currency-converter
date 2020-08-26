import React, { useEffect, useState, useRef } from "react";
import { render } from "react-dom";
import { Form } from "react-final-form";
import FieldCurrency from "./FieldCurrency";
import FieldSelectBox from "./FieldSelectBox";
import {
  FormStyled,
  FieldItemStyled,
  InputStyled,
  ButtonStyled,
} from "./ConverterForm.styled";

const BASE_URL = "https://api.exchangeratesapi.io/latest";

const ConverterForm = () => {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [currencyFrom, setCurrencyFrom] = useState("");
  const [currencyTo, setCurrencyTo] = useState("");
  const [amount, setAmount] = useState();
  const [convertedAmount, setConvertedAmount] = useState();

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        const initValueFrom = Object.keys(data.rates)[19];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)].sort());
        setCurrencyFrom(data.base);
        setCurrencyTo(initValueFrom);
        // console.log("data:", data);
      });
  }, []);

  const handleConvert = () => {
    fetch(`${BASE_URL}?base=${currencyFrom}&symbols=${currencyTo}`)
      .then((res) => res.json())
      .then((data) => {
        const convertedAmount = amount * data.rates[currencyTo];
        setConvertedAmount(convertedAmount);
      });
  };

  const handleSelectValueFrom = (e) => {
    setCurrencyFrom(e.target.value);
  };

  const handleSelectValueTo = (e) => {
    setCurrencyTo(e.target.value);
  };

  const handleInputValueFrom = (e) => {
    setAmount(e.target.value);
  };

  const handleSwitch = (e) => {
    setCurrencyFrom(currencyTo);
    setCurrencyTo(currencyFrom);
    handleConvert();
  };

  // avoid multiple submit
  const onSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // window.alert(JSON.stringify(values, 0, 2));
        resolve();
      }, 1000);
    });
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{
        convertFrom: currencyFrom,
        convertTo: currencyTo,
        valueToConvert: amount,
        result: convertedAmount,
      }}
      render={({ handleSubmit, values, pristine, submitting }) => (
        <FormStyled onSubmit={handleSubmit}>
          <FieldItemStyled>
            <FieldCurrency currency={currencyFrom} />
            <InputStyled
              name="valueToConvert"
              placeholder="Wpisz kwotę"
              value={amount}
              onChange={handleInputValueFrom}
              required
            />
          </FieldItemStyled>
          <FieldItemStyled>
            <FieldCurrency currency={currencyTo} />
            <InputStyled
              name="result"
              placeholder="Wynik"
              readOnly
              value={convertedAmount}
            />
          </FieldItemStyled>
          <FieldSelectBox
            currencyOptionsMapped={currencyOptions}
            nameFrom="convertFrom"
            nameTo="convertTo"
            onClickFrom={handleSelectValueFrom}
            onClickTo={handleSelectValueTo}
            onClickSwitch={handleSwitch}
          />
          <ButtonStyled
            type="button"
            disabled={submitting}
            onClick={handleConvert}
          >
            Konwertuj
          </ButtonStyled>
          {/* <pre
            style={{
              marginTop: "50px",
              background: "silver",
              padding: "5px",
              fontSize: "12px"
            }}
          >
            {JSON.stringify(values, 0, 2)}
          </pre> */}
        </FormStyled>
      )}
    />
  );
};

export default ConverterForm;
