import styled from "styled-components";

export const Form = styled.form`
  height: 100%;
  width: 100%;
  background-color: #353535;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export const TextField = styled.input`
  font-size: 1.2rem;
  outline: none;
  border: 2px solid #353535;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  padding: 8px 30px;
  font-family: Roboto;
  &:focus {
    border: 2px solid #e63333;
  }
  @media screen and (max-width: 416px) {
    padding: 8px 10px;
    font-size: 0.9rem;
  }
`;

export const Button = styled.button`
  font-size: 1.2rem;
  outline: none;
  border: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 8px 12px;
  background-color: #e63333;
  color: #fff;
  font-family: Roboto;
  position: relative;
  right: 4px;

  @media screen and (max-width: 416px) {
    font-size: 0.9rem;
  }
`;
