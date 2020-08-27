import styled from "styled-components";

export const FieldCurrencyItem = styled.span`
  position: absolute;
  right: 12px;
  color: #c2cbd9;
  line-height: 22px;
  ${({ hasError }) => hasError && `color: #e82b52;`}
`;
