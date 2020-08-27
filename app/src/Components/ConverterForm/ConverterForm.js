import React, { useEffect, useState, useRef } from "react";
import { render } from "react-dom";
import { Form } from "react-final-form";
import FieldCurrency from "./FieldCurrency";
import FieldSelectBox from "./FieldSelectBox";
import {
  FormStyled,
  FieldItemStyled,
  FieldInputStyled,
  FieldInputHtmlStyled,
  InputStyled,
  InputError,
  ButtonStyled,
} from "./ConverterForm.styled";

const BASE_URL = "https://api.exchangeratesapi.io/latest";

const ConverterForm = () => {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [currencyFrom, setCurrencyFrom] = useState("");
  const [currencyTo, setCurrencyTo] = useState("");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState();

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        const initCurrencyFrom = Object.keys(data.rates)[19];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)].sort());
        setCurrencyFrom(data.base);
        setCurrencyTo(initCurrencyFrom);
        // console.log("data:", data);
      });
  }, []);

  const handleConvert = () => {
    if (amount != null) {
      fetch(`${BASE_URL}?base=${currencyFrom}&symbols=${currencyTo}`)
        .then((res) => res.json())
        .then((data) => {
          const convertedAmount = amount * data.rates[currencyTo];
          if (convertedAmount > 0) {
            setConvertedAmount(convertedAmount.toFixed(2));
          }
        });
    }
  };

  const handleConvertReverse = () => {
    if (amount != null) {
      fetch(`${BASE_URL}?base=${currencyTo}&symbols=${currencyFrom}`)
        .then((res) => res.json())
        .then((data) => {
          const convertedAmount = amount * data.rates[currencyFrom];
          setConvertedAmount(convertedAmount.toFixed(2));
        });
    }
  };

  const handleSelectValueFrom = (e) => {
    setCurrencyFrom(e.target.value);
    setConvertedAmount();
  };

  const handleSelectValueTo = (e) => {
    setCurrencyTo(e.target.value);
    setConvertedAmount();
  };

  const handleInputValueFrom = (e) => {
    setAmount(e.target.value);
  };

  const handleSwitch = () => {
    if (amount != null && convertedAmount != null) {
      setCurrencyFrom(currencyTo);
      setCurrencyTo(currencyFrom);
      handleConvertReverse();
    } else {
      setCurrencyFrom(currencyTo);
      setCurrencyTo(currencyFrom);
    }
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
      validate={(values) => {
        const errors = {};
        if (!values.valueToConvert) {
          errors.valueToConvert = "Pole nie może być puste";
        } else if (isNaN(values.valueToConvert)) {
          errors.valueToConvert = "Nieprawidłowa wartość";
        }
        return errors;
      }}
      render={({ handleSubmit, values, pristine, submitting }) => (
        <FormStyled onSubmit={handleSubmit}>
          <FieldItemStyled>
            <FieldCurrency currency={currencyFrom} />
            <FieldInputHtmlStyled
              name="valueToConvert"
              render={({ input, meta }) => {
                return (
                  <>
                    <InputStyled
                      {...input}
                      type="tel"
                      placeholder="Wpisz kwotę"
                      value={amount}
                      onChange={handleInputValueFrom}
                    />
                    {meta.error && meta.touched && (
                      <InputError>{meta.error}</InputError>
                    )}
                  </>
                );
              }}
            />
          </FieldItemStyled>
          <FieldItemStyled>
            <FieldCurrency currency={currencyTo} />
            <FieldInputStyled
              name="result"
              component="input"
              type="tel"
              placeholder="Wynik"
              readOnly
              value={convertedAmount}
              result="true"
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
        </FormStyled>
      )}
    />
  );
};

export default ConverterForm;
