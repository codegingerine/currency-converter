import styled, { css } from "styled-components";
import { media } from "Utils/media";
import { Field } from "react-final-form";
import HistoryList from "Components/HistoryList";

export const HistoryStyled = styled(HistoryList)`
  ${({ showHistory }) =>
    showHistory
      ? css`
        max-height: 0;
        transition: max-height 1.2s linear;
        ${media.lg`
          max-height: none;
          max-width: 0;
          transition: max-width 1.2s .2s linear;
        `}
      `
      : css`
        max-height: none;
        transition: max-height 1.2s .2s linear;
        ${media.lg`
          max-width: 525px;
          transition: max-width 1.2s .2s linear;
      `}
      `
    }
`;

export const CalculatorStyled = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  background: #fff;
  border-radius: 20px;
  padding: 40px;
  z-index: 1;

  ${media.lg`
    width: 500px;
    padding: 100px 50px;
  `}

  ${media.xl`
    width: 600px;
    padding: 100px;
  `}
`;

export const Title = styled.h1`
  color: #3578eb;
  font-size: 32px;
  line-height: 47px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
`;

export const FieldItemStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:first-child {
    margin-bottom: 27px;
  }
`;

const InputMix = css`
  width: 100%;
  height: 56px;
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  color: #454860;
  line-height: 27px;
  border: solid #a3b1c6;
  border-width: 0 0 2px 0;
  padding: 18px 60px 16px 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &::placeholder,
  &::-webkit-input-placeholder {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: #c2cbd9;
  }
  &:-ms-input-placeholder {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: #c2cbd9;
  }
`;

export const FieldInputStyled = styled(Field)`
  ${InputMix}
  ${({ result }) => result && `font-weight: 700;`}
`;

export const FieldInputHtmlStyled = styled(Field)``;

export const InputStyled = styled.input`
  ${InputMix}
  ${({ hasError }) => hasError && `color: #e82b52; border-color: #e82b52;`}
`;

export const InputError = styled.span`
  position: absolute;
  bottom: -18px;
  color: #e82b52;
  font-size: 12px;
  line-height: 17px;
  padding: 0 12px;
  z-index: 1;
`;

export const ButtonStyled = styled.button`
  ${({ disabled, submitting }) =>
    disabled || submitting
      ? css`
          background: #c2cbd9;
        `
      : css`
          background: linear-gradient(99deg, #3578eb 0%, #1c5cc5 100%);
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
