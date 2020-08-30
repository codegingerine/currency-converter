import styled from "styled-components";

export const TitleBarWrapperStyled = styled.div`
  width: 452px;
  display: flex;
  align-items: center;
  padding: 19px 14px 17px 14px;
  border-bottom: 1px solid #ffffff;
`;

export const TitleFieldStyled = styled.span`
  display: block;
  color: #ffffff;
  font-size: 16px;
  line-height: 22px;
  font-weight: 700;

  &:first-child {
    width: 85px;
    margin-right: 20px;
  }

  &:nth-child(2) {
    width: 134px;
    text-align: right;
    margin-right: 40px;
  }

  &:last-child {
    width: 142px;
    text-align: right;
  }
`;
