import React from "react";
import { Wrapper } from "../styles/Wrapper.styled";
import { motion } from "framer-motion";
import DataItem from "./DataItem";
import Loading from "./Loading";
const DataList = ({ isLoading, result }) => {
  return (
    <Wrapper as={motion.div} animate={{ scale: 1 }} initial={{ scale: 0 }}>
      {isLoading && <Loading />}
      <DataItem results={result} />
    </Wrapper>
  );
};

export default DataList;
