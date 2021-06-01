import React from "react";
import styled from "styled-components";

import { Header } from "./header";

interface LayoutProps {
  subtite: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, subtite }) => {
  return (
    <>
      <Header />
      <Main>
        <SubTitle>{subtite}</SubTitle>
        {children}
      </Main>
    </>
  );
};

const Main = styled.main`
  margin: 30px 10%;
`;

const SubTitle = styled.h2`
  font-size: 24px;
  margin: 30px 0;
  font-weight: normal;
`;
