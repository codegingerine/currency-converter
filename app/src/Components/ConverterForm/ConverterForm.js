import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import uuid from "uuid";
import { Form } from "react-final-form";
import FieldCurrency from "./FieldCurrency";
import FieldSelectBox from "./FieldSelectBox";
import {
  CalculatorStyled,
  FormStyled,
  FieldItemStyled,
  FieldInputStyled,
  FieldInputHtmlStyled,
  InputStyled,
  InputError,
  ButtonStyled,
  Title,
  HistoryStyled,
} from "./ConverterForm.styled";

const BASE_URL = "https://api.exchangeratesapi.io/latest";

const ConverterForm = ({ title, showHistory }) => {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [currencyFrom, setCurrencyFrom] = useState("");
  const [currencyTo, setCurrencyTo] = useState("");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState();
  const [isToggled, setIsToggled] = useState(false);
  const [date, setDate] = useState();
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        const initCurrencyFrom = Object.keys(data.rates)[19];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)].sort());
        setCurrencyFrom(data.base);
        setCurrencyTo(initCurrencyFrom);
        setDate(data.date);
        // console.log("data:", data);
      });
  }, []);

  // execute handleAddItem only after state has been changed
  useEffect(() => {
    convertedAmount > 0 && handleAddItem();
  }, [convertedAmount]);

  // fire conversion on submit
  const handleConvert = () => {
    if (amount != null && currencyFrom !== currencyTo) {
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

  // fire conversion on currency switch
  const handleConvertReverse = () => {
    if (amount != null && currencyFrom !== currencyTo) {
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
    setConvertedAmount();
  };

  // on currency switch
  const handleSwitch = () => {
    if (amount != null && convertedAmount != null) {
      setCurrencyFrom(currencyTo);
      setCurrencyTo(currencyFrom);
      handleConvertReverse();
    } else {
      setCurrencyFrom(currencyTo);
      setCurrencyTo(currencyFrom);
    }
    setIsToggled(!isToggled);
  };

  // add item to conversion history list
  const handleAddItem = () => {
    const item = {
      id: uuid.v4(),
      date,
      amount,
      convertedAmount,
      currencyFrom,
      currencyTo,
    };
    setItemsList((prevItemsList) => [...prevItemsList, item]);
  };

  // reset conversion history list
  const handleClearList = () => setItemsList([]);

  const formValidation = (values) => {
    const errors = {};
    if (!values.valueToConvert) {
      errors.valueToConvert = "Pole nie może być puste";
    } else if (isNaN(values.valueToConvert)) {
      errors.valueToConvert = "Nieprawidłowa wartość";
    } else if (amount == 0 || amount < 0) {
      errors.valueToConvert = "Wartość pola musi być większa od zera";
    } else if (currencyFrom === currencyTo) {
      errors.valueToConvert = "Waluty do konwersji nie mogą być takie same";
    }
    return errors;
  };

  const onSubmit = () => handleConvert();

  return (
    <>
      <CalculatorStyled>
        {title && <Title>{title}</Title>}
        <Form
          onSubmit={onSubmit}
          initialValues={{
            convertFrom: currencyFrom,
            convertTo: currencyTo,
            valueToConvert: amount,
            result: convertedAmount,
          }}
          validate={formValidation}
          render={({ handleSubmit, values, pristine, submitting }) => (
            <FormStyled onSubmit={handleSubmit}>
              <FieldItemStyled>
                <FieldInputHtmlStyled
                  name="valueToConvert"
                  render={({ input, meta }) => {
                    return (
                      <>
                        <FieldCurrency
                          currency={currencyFrom}
                          hasError={meta.error && meta.touched && true}
                        />
                        <InputStyled
                          {...input}
                          type="text"
                          placeholder="Wpisz kwotę"
                          value={amount}
                          onChange={handleInputValueFrom}
                          hasError={meta.error && meta.touched && true}
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
                swapArrows={isToggled}
              />
              <ButtonStyled type="submit" disabled={submitting}>
                Konwertuj
              </ButtonStyled>
            </FormStyled>
          )}
        />
      </CalculatorStyled>
      <HistoryStyled
        mappedList={itemsList}
        showHistory={showHistory}
        onClearClick={handleClearList}
        noHistoryMsg={itemsList.length === 0 && true}
      />
    </>
  );
};

export default ConverterForm;
