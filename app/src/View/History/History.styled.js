import styled from "styled-components";
import MenuWrapper from "Components/MenuWrapper";

export const MenuWrapperStyled = styled(MenuWrapper)`
  margin-left: 359px;
  ${({ isOpen }) => isOpen && `margin-left: 0;`}
`;

export const HistoryWrapper = styled.div`
  height: 100%;
  padding: 90px 23px 58px 50px;
`;
