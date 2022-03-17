import React from "react";
import {
  Content,
  Description,
  Modal,
  ModalBg,
  Name,
} from "../styles/Modal.styled";
import { Image } from "../styles/Wrapper.styled";
import { setimages } from "../utils/Img";
import { useParams } from "react-router-dom";
import { hash } from "../utils/Hash";
import useFetch from "../hooks/useFetch";
import { motion } from "framer-motion";

const Modals = () => {
  const { id } = useParams();
  const { data: results } = useFetch(
    `https://gateway.marvel.com/v1/public/characters?id=${id}&ts=1&apikey=${process.env.REACT_APP_PUBLIC_API}&hash=${hash}`
  );
  return (
    <ModalBg>
      {results.map((result) => (
        <Modal
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
          <Content>
            <Name> {result.name}</Name>
            <Description>
              {result.description.length === 0
                ? "Description not Available"
                : result.description}
            </Description>
          </Content>
        </Modal>
      ))}
    </ModalBg>
  );
};

export default Modals;
