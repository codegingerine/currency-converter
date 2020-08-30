import styled from "styled-components";
import CloseSvg from "Assets/svg/close-24px.svg";

export const HeaderStyled = styled.header`
  width: 77px;
  display: flex;
  justify-content: flex-end;
  padding-right: 25px;
  padding-top: 50px;
  border-radius: 0 20px 20px 0;
`;

export const NavStyled = styled.nav``;

export const MenuStyled = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

export const Close = styled(CloseSvg)`
  width: 24px;
  height: 24px;
  fill: #ffffff;
  opacity: 1;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.6;
    transition: opacity 0.2s ease;
  }
`;
