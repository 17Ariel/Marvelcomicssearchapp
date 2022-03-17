import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { Card, CharacterName, Image } from "../styles/Wrapper.styled";
import { setimages } from "../utils/Img";
const DataItem = ({ results }) => {
  return results.map((result) => (
    <Card
      key={result.id}
      as={motion.div}
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      transition={{ type: "spring", stiffness: 260, duration: 2 }}
    >
      <Image
        src={setimages(
          result.thumbnail.path,
          "standard_medium",
          result.thumbnail.extension
        )}
        alt="img"
      />
      <Link to={`/${result.id}`} className="links">
        <CharacterName>{result.name}</CharacterName>
      </Link>
    </Card>
  ));
};

export default DataItem;
