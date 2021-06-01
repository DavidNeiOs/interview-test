import React from "react";
import styled from "styled-components";

export const Header: React.FC = ({ children }) => {
  return (
    <Container>
      <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="logo" />
      <Title>Planned test</Title>
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  background-color: white;
`;

const Title = styled.h1`
  margin: 0;
  margin-left: 20px;
  font-size: 20px;
`;
