import styled from "styled-components";
import ArrowSvg from "Assets/svg/arrow_right_alt-24-px-b.svg";

export const HistoryItemStyled = styled.div`
  width: 452px;
  display: flex;
  align-items: center;
  padding: 15px 14px;
  border-bottom: 1px solid #ffffff;
`;

export const HistoryFieldBoxStyled = styled.div`
  width: 142px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HistoryFieldStyled = styled.p`
  display: block;
  color: #ffffff;
  font-size: 16px;
  line-height: 22px;
  font-weight: 300;

  &:first-child {
    width: 81px;
    margin-right: 20px;
  }

  &:nth-of-type(2) {
    width: 134px;
    text-align: right;
    margin-right: 40px;
  }

  &:last-child {
    text-align: right;
    font-weight: 600;
  }
`;

export const CurrencyStyled = styled.span``;

export const IconStyled = styled(ArrowSvg)`
  width: 24px;
  height: 24px;
  margin-right: 24px;
`;


