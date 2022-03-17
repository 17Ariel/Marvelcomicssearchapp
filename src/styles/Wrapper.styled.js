import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 6vh;
  min-height: 70vh;
  gap: 10px;
  margin-bottom: 10px;
`;

export const Card = styled(motion.div)`
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 10px 16px;
  max-width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  border-radius: 10px;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1), 1.8;
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 4);
  }
`;

export const Image = styled.img`
  max-width: 250px;
  height: 260px;
`;

export const CharacterName = styled.h1`
  font-size: 1.02rem;
  font-family: Roboto;
  text-align: center;
  line-height: 10px;
`;
