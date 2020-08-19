import styled, { css } from "styled-components";
import { Field } from "react-final-form";

export const FormStyled = styled.form`
  background: #fff;
  border-radius: 20px;
`;

export const FieldItemStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  &:not(last-child) {
    margin-bottom: 27px;
  }
`;

export const FieldStyled = styled(Field)`
  width: 100%;
  font-size: 20px;
  color: #454860;
  ${({result}) => result && `font-weight: 700;`}
  line-height: 27px;
  border: solid #a3b1c6;
  border-width: 0 0 2px 0;
  padding: 18px 60px 16px 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &::placeholder,
  &::-webkit-input-placeholder {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: #c2cbd9;
  }
  &:-ms-input-placeholder {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: #c2cbd9;
  }
`;

export const ButtonStyled = styled.button`
  ${({ disabled, submitting }) =>
    disabled || submitting
      ? css`
          background: #c2cbd9;
        `
      : css`
          background: linear-gradient(99deg, #3578EB 0%, #1C5CC5 100%);
        `};
  width: 100%;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  color: white;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  border: 0;
  border-radius: 100px;
  padding: 19px;
  margin-top: 50px;
`;
