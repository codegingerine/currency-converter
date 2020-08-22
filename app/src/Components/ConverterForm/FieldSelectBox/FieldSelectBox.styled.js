import styled from "styled-components";
import { Field } from "react-final-form";

export const SelecBoxtWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export const SelectStyled = styled(Field).attrs(() => ({
  component: "select",
}))`
  min-width: 150px;
  font-family: "Open Sans", sans-serif;
  color: #454860;
  font-size: 16px;
  background: #ffffff;
  box-shadow: 3px 3px 7px #c2cbd9;
  border-radius: 5px;
  border: 0;
  padding: 17px 21px 17px 16px;
  outline: none;
`;
