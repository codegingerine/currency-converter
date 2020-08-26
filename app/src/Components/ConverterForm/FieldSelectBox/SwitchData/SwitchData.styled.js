import styled, { css } from "styled-components";
import SwitchSvg from "Assets/svg/arrow_right_alt-24px.svg";

export const SwitchStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify:content: center;
  height: 16px;
  width: 18px;
  cursor: pointer;
`;

const SvgMix = css`
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
`;

export const SwitchRightStyled = styled(SwitchSvg)`
  ${SvgMix}
  align-self: flex-end;
`;
