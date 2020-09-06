import styled, { css } from "styled-components";
import { media } from "Utils/media";

export const HistoryWrapperStyled = styled.div`
  overflow: hidden;
`;

export const HistoryListStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 62px 23px 58px 50px;
  overflow: hidden;

  ${media.lg`
    padding: 82px 23px 58px 50px;
  `}
`;

export const HistoryItemsStyled = styled.div`
  height: 206px;

  ${media.lg`
    height: 414px;
  `}
`;

const ItemMix = css`
  min-width: 400px;
  display: block;
  color: #ffffff;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.8px;
  letter-spacing: 0.8px;
  margin-top: 20px;
  text-align: center;
`;

export const HistoryListClear = styled.span`
  ${ItemMix}
  width: 100%;
  text-decoration: underline;
  font-weight: 300;
  ${({ empty }) => (empty ? `opacity: 0.6; ` : `opacity: 1; cursor: pointer;`)}
`;

export const HistoryNoMsg = styled.span`
  ${ItemMix}
  position: absolute;
  font-weight: 600;
  top: 50%;
  transform: translateY(-50%);
`;
