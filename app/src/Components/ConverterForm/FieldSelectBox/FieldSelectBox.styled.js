import styled from "styled-components";
import { media } from "Utils/media";
import { Field } from "react-final-form";

export const SelectBoxtWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 52px;
`;

export const SelectStyled = styled(Field).attrs(() => ({
  component: "select",
}))`
  min-width: 130px;
  font-family: "Open Sans", sans-serif;
  color: #454860;
  font-size: 16px;
  background: #ffffff;
  box-shadow: 3px 3px 7px #c2cbd9;
  border-radius: 5px;
  border: 0;
  padding: 16px 21px 16px 16px;
  outline: none;

  ${media.lg`
    min-width: 150px;
  `}
`;
