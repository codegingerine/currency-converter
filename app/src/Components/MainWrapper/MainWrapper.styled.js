import styled from "styled-components";
import { media } from "Utils/media";

export const MainStyled = styled.main`
  position: relative;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: flex-start;
  background: #f6f7f9;
  padding: 70px 20px 20px;

  ${media.lg`
    align-items: center;
    padding: 50px;
  `}

  &:before {
    content: "";
    position: absolute;
    width: 40%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(180deg, #3578eb 0%, #1c5cc5 100%);

    ${media.lg`
      width: 750px;
    `}
  }
`;

export const MainContentStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 20px;
  z-index: 1;

  ${media.lg`
    justify-content: flex-start;
    width: 750px;
  `}
`;
