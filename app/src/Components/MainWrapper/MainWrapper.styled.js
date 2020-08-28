import styled from "styled-components";

export const MainStyled = styled.main`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  background: #f6f7f9;

  &:before {
    content: "";
    position: absolute;
    width: 750px;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(180deg, #3578eb 0%, #1c5cc5 100%);
  }
`;

export const MainContentStyled = styled.div`
  display: flex;
  border-radius: 20px;
  z-index: 1;
`;
