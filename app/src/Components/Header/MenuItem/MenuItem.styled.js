import styled from "styled-components";
import { media } from "Utils/media";
import { NavHashLink as NavLink } from 'react-router-hash-link';

export const MenuItemStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  &:not(last-child) {
    ${media.lg`margin-bottom: 9px;`}
  }
`;

export const LabelStyled = styled.span`
  display: block;
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
  color: #ffffff;
  opacity: 0.6;
  transition: opacity 0.2s ease;
  
  ${media.lg`
    writing-mode: vertical-rl;  
  `}
`;

export const NavLinkRouterStyled = styled(NavLink)`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  &.active ${LabelStyled} {
    opacity: 1;
  }

  &:hover ${LabelStyled} {
    opacity: 1;
    transition: opacity 0.2s ease;
  }
`;
