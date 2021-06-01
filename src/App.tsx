import React, { useState } from "react";
import styled from "styled-components";

import { UsersProvider } from "./usersContext";
import { User } from "./types/user";
import { Layout } from "./layout/layout";
import { MainPanel as Panel } from "./components/main-panel";
import { TableComponent as Table } from "./components/table";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [min, setMin] = useState("");
  const [minError, setMinError] = useState("");
  const [max, setMax] = useState("");
  const [maxError, setMaxError] = useState("");
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [loadedUsers, setLoadedUsers] = useState(false);
  const [searchName, setSearchName] = useState("");

  return (
    <UsersProvider
      value={{
        users,
        min,
        max,
        minError,
        maxError,
        loadingUsers,
        loadedUsers,
        searchName,
        setUsers,
        setMin,
        setMax,
        setMinError,
        setMaxError,
        setLoadingUsers,
        setLoadedUsers,
        setSearchName,
      }}
    >
      <Layout subtite="Users">
        <MainContainer>
          <Panel />
          <Table />
        </MainContainer>
      </Layout>
    </UsersProvider>
  );
}

const MainContainer = styled.div`
  display: flex;

  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export default App;
