import React, { Component } from "react";
import { render } from "react-dom";
import { Form } from "react-final-form";
import FieldCurrency from "./FieldCurrency";
import { FormStyled, FieldItemStyled, FieldStyled, ButtonStyled } from "./ConverterForm.styled";

class ConverterForm extends Component {
  // avoid multiple submit
  onSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        window.alert(JSON.stringify(values, 0, 2));
        resolve();
      }, 1000);
    });
  };

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        render={({ handleSubmit, values, pristine, submitting }) => (
          <FormStyled onSubmit={handleSubmit}>
            <FieldItemStyled>
              <FieldCurrency />
              <FieldStyled
                name="toConvert"
                component="input"
                type="number"
                placeholder="Wpisz kwotę"
                required
              />
            </FieldItemStyled>
            <FieldItemStyled>
              <FieldCurrency />
              <FieldStyled
                name="result"
                component="input"
                type="number"
                placeholder="Wynik"
                // readOnly
                result="true"
              />
            </FieldItemStyled>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
            <ButtonStyled type="submit" disabled={pristine || submitting}>
              Konwertuj
            </ButtonStyled>
          </FormStyled>
        )}
      />
    );
  }
}

export default ConverterForm;
