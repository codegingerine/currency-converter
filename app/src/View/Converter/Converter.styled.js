import styled, { css } from "styled-components";
import { media } from "Utils/media";
import Header from "Components/Header";

export const ConverterWrapperStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  background: linear-gradient(180deg, #3578eb 0%, #1c5cc5 100%);
  box-shadow: 10px 15px 50px #4548604d;
  box-shadow: 10px 15px 50px #4548604d;
  border-radius: 20px;
  margin-left: 0;

  ${media.lg`
    flex-direction: row;
    max-width: none;
  `}

  ${({ showHistory }) =>
    showHistory
      ? css`
          ${media.lg`margin-left: 322px;`}
          ${media.xl`margin-left: 622px;`}
          transition: margin-left 1.2s 0.2s ease;
        `
      : css`
          ${media.lg`margin-left: 0;`}
          ${media.xl`margin-left: 359px;`}
          transition: margin-left 1.2s 0.2s ease;
        `}
`;

export const HeaderStyled = styled(Header)`
  position: absolute;
  top: 518px;
  left: 0;
  right: 0;
  background: linear-gradient(99deg,#3578eb 0%,#1c5cc5 100%);
  border-radius: 0  0 20px 20px;
  margin: 0 auto;
  z-index: 1;
  
  ${media.lg`
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    border-radius: 20px;
    background: transparent;
  `}
`;