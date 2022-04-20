import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  z-index: 2;
  border-radius: 5px;
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(10px);
  /* filter: drop-shadow(2px 4px 6px black);
  background-color: rgba(152 151 151 / 10%); */
  box-shadow: inset 0 0 0 475px rgba(255, 255, 255, 0.09);
  /* box-shadow: inset 0 0 0 200px rgb(255 255 255 / 8%); */
  border-top: 2px solid rgba(225, 225, 225, 0.3);
  border-left: 2px solid rgba(225, 225, 225, 0.1);
  border-right: 2px solid rgba(225, 225, 225, 0.2);
`;

const FrostedContainer = () => {
  return <Container></Container>;
};

export default FrostedContainer;
