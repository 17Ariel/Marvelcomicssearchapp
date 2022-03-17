import styled from "styled-components";

export const Header = styled.header`
  min-height: 10vh;
  width: 100%;
  background-color: #353535;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: sticky;
  z-index: 1;
  top: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 10px 0;
`;

export const HeaderText = styled.h1`
  font-size: 2rem;
  color: #fff;
  position: relative;
  top: 6px;
  text-shadow: 0 4px 8px #e63333;
`;
