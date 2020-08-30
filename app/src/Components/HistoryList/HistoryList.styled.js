import styled, { css } from "styled-components";

export const HistoryListStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px 23px 58px 50px;
  overflow: hidden;
`;

export const HistoryItemsStyled = styled.div`
  height: 438px;
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
  opacity: 0.6;
  cursor: pointer;
`;

export const HistoryNoMsg = styled.span`
  ${ItemMix}
  position: absolute;
  font-weight: 600;
  top: 50%;
  transform: translateY(-50%);
`;
