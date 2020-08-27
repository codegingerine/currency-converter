import styled, { css } from "styled-components";
import SwitchSvg from "Assets/svg/arrow_right_alt-24px.svg";

const SvgMix = css`
  position: relative;
  height: 8px;
  width: 12px;
  path {
    &:last-child {
      fill: #454860;
    }
  }
`;

export const SwitchLeftStyled = styled(SwitchSvg)`
  ${SvgMix}
  transform: rotate(180deg);
  transition: transform 0.1s, right 0.1s;
`;

export const SwitchRightStyled = styled(SwitchSvg)`
  align-self: flex-end;
  ${SvgMix}
  transition: transform .1s, left .1s;
`;

export const SwitchStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify:content: center;
  height: 16px;
  width: 18px;
  cursor: pointer;

  ${({ swapArrows }) =>
    swapArrows &&
    `${SwitchLeftStyled} {
      transform: rotate(0deg);
      right: -6px;
      transition: transform .1s, right .1s;
    }
    ${SwitchRightStyled} {
      transform: rotate(180deg);
      left: -6px;
      transition: transform .1s, left .1s;
    }
  `}
`;
