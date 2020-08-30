import styled from "styled-components";

export const ConverterWrapperStyled = styled.div`
  display: flex;
  background: linear-gradient(180deg, #3578eb 0%, #1c5cc5 100%);
  box-shadow: 10px 15px 50px #4548604d;
  box-shadow: 10px 15px 50px #4548604d;
  border-radius: 20px;
  ${({ showHistory }) =>
    showHistory
      ? "margin-left: 622px; transition: margin-left 1.2s .2s ease;"
      : "margin-left: 359px; transition: margin-left 1.2s .2s ease;"}
`;
