import { motion } from "framer-motion";
import React from "react";
import { Loads } from "../styles/Load.styled";

const Loading = () => {
  return (
    <motion.div
      animate={{ opacity: [0, 1.4, 1.0], x: [-10, 100] }}
      transition={{ type: "spring", stiffness: 260, duration: 1 }}
    >
      <Loads>Loading......</Loads>
    </motion.div>
  );
};

export default Loading;
