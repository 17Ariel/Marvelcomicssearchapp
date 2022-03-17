import { motion } from "framer-motion";
import styled from "styled-components";

export const ModalBg = styled(motion.div)`
  margin-top: 6vh;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled(motion.div)`
  max-width: 600px;
  height: 300px;
  border-radius: 4px;
  padding: 10px 14px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media screen and (max-width: 642px) {
    flex-wrap: wrap;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Name = styled.h1`
  font-size: 1.4rem;
  text-align: center;
  line-height: 10px;
`;

export const Description = styled.p`
  line-height: 22px;
`;
