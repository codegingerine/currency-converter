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
  const [initialCurrencyFrom, setInitialCurrencyFrom] = useState();
  const [initialCurrencyTo, setInitialCurrencyTo] = useState();
  const [currencyFrom, setCurrencyFrom] = useState("");
  const [currencyTo, setCurrencyTo] = useState("");

  const refCurrencyFrom = useRef();
  const refCurrencyTo = useRef();

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        const initValueFrom = Object.keys(data.rates)[19];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setInitialCurrencyFrom(initValueFrom);
        setInitialCurrencyTo(data.base);
        // console.log("data:", data);
      });
  }, []);

  useEffect(() => {
    setCurrencyFrom(refCurrencyFrom.current.value);
    setCurrencyTo(refCurrencyTo.current.value);
  });

  const handleCurrencyFrom = (e) => {
    e.preventDefault();
    setCurrencyFrom(refCurrencyFrom.current.value);
  };

  const handleCurrencyTo = (e) => {
    e.preventDefault();
    setCurrencyTo(refCurrencyTo.current.value);
  };

  // avoid multiple submit
  const onSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        window.alert(JSON.stringify(values, 0, 2));
        resolve();
      }, 1000);
    });
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{
        convertFrom: initialCurrencyFrom,
        convertTo: initialCurrencyTo,
      }}
      render={({ handleSubmit, values, pristine, submitting }) => (
        <FormStyled onSubmit={handleSubmit}>
          <FieldItemStyled>
            <FieldCurrency currency={currencyFrom} />
            <InputStyled
              name="valueToConvert"
              placeholder="Wpisz kwotę"
              required
            />
          </FieldItemStyled>
          <FieldItemStyled>
            <FieldCurrency currency={currencyTo} />
            <InputStyled
              name="result"
              placeholder="Wynik"
              readOnly
              result="true"
            />
          </FieldItemStyled>
          <FieldSelectBox
            currencyOptionsMapped={currencyOptions}
            nameFrom="convertFrom"
            nameTo="convertTo"
            refFrom={refCurrencyFrom}
            refTo={refCurrencyTo}
            onClickFrom={handleCurrencyFrom}
            onClickTo={handleCurrencyTo}
          />
          <ButtonStyled type="submit" disabled={pristine || submitting}>
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
