import React from "react";
import { Header, HeaderText } from "../styles/Header.styled";
import Forms from "./Forms";

const Headers = ({ inputval, setInputval, searchHere }) => {
  return (
    <Header>
      <HeaderText>ComicsZone</HeaderText>
      <Forms
        inputval={inputval}
        setInputval={setInputval}
        searchHere={searchHere}
      />
    </Header>
  );
};

export default Headers;
