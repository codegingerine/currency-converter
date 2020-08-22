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
  const [selectValueFrom, setSelectValueFrom] = useState("");
  const [selectValueTo, setSelectValueTo] = useState("");

  const refSelectValueFrom = useRef();
  const refSelectValueTo = useRef();

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        // console.log("data::::", data);
      });
  }, []);

  useEffect(() => {
    setSelectValueFrom(refSelectValueFrom.current.value);
    setSelectValueTo(refSelectValueTo.current.value);
  });

  const handleSelectValueFrom = (e) => {
    e.preventDefault();
    setSelectValueFrom(refSelectValueFrom.current.value);
    refSelectValueFrom.current.value;
  };

  const handleSelectValueTo = (e) => {
    e.preventDefault();
    setSelectValueTo(refSelectValueTo.current.value);
    refSelectValueTo.current.value;
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
      initialValueFrom={currencyOptions[20]}
      initialValueTo={currencyOptions[0]}
      render={({
        handleSubmit,
        values,
        pristine,
        submitting,
        initialValueFrom,
        initialValueTo,
      }) => (
        <FormStyled onSubmit={handleSubmit}>
          <FieldItemStyled>
            <FieldCurrency currency={selectValueFrom} />
            <InputStyled name="to convert" placeholder="Wpisz kwotę" required />
          </FieldItemStyled>
          <FieldItemStyled>
            <FieldCurrency currency={selectValueTo} />
            <InputStyled
              name="result"
              placeholder="Wynik"
              readOnly
              result="true"
            />
          </FieldItemStyled>
          <FieldSelectBox
            currencyOptionsMapped={currencyOptions}
            initialValueFrom={initialValueFrom}
            initialValueTo={initialValueTo}
            refFrom={refSelectValueFrom}
            refTo={refSelectValueTo}
            onClickFrom={handleSelectValueFrom}
            onClickTo={handleSelectValueTo}
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
