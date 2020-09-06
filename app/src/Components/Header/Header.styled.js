import styled from "styled-components";
import { media } from "Utils/media";
import CloseSvg from "Assets/svg/close-24px.svg";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 15px 25px;
  border-radius: 0 20px 20px 0;
  
  ${media.lg`
    justify-content: flex-end;
    width: 77px;
    padding-top: 50px;
  `}
`;

export const NavStyled = styled.nav``;

export const MenuStyled = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0 auto;

  ${media.lg`
    flex-direction: column;
  `}
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
