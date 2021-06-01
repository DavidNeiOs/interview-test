import React from "react";
import styled from "styled-components";

import { getUsers as getUsersApi } from "../api/get-users";
import { useUsers } from "../usersContext";
import { InputContainer } from "./input-container";

export const MainPanel: React.FC = () => {
  const {
    loadingUsers,
    loadedUsers,
    min,
    max,
    setLoadingUsers,
    setLoadedUsers,
    setUsers,
    setMin,
    setMinError,
    setMax,
    setMaxError,
  } = useUsers();

  const retrieveUsers = async () => {
    setLoadingUsers(true);
    const newUsers = await getUsersApi();
    setLoadingUsers(false);
    setLoadedUsers(true);
    setUsers(newUsers);
    console.log(newUsers);
  };
  return (
    <Panel>
      <InputContainer>
        <Label htmlFor="minAge">Min</Label>
        <Input
          id="minAge"
          name="minAge"
          size={1}
          value={min}
          onChange={(e) => {
            const number = parseInt(e.target.value);
            if (!isNaN(number)) {
              setMin(e.target.value);
            } else {
              setMin("");
              setMinError("Not a valid input");
            }
          }}
          type="text"
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="maxAge">Max</Label>
        <Input
          id="maxAge"
          name="maxAge"
          size={1}
          value={max}
          onChange={(e) => {
            const number = parseInt(e.target.value);
            if (!isNaN(number)) {
              setMax(e.target.value);
            } else {
              setMax("");
              setMaxError("Not a valid input");
            }
          }}
          type="text"
        />
      </InputContainer>
      <Button disabled={loadingUsers || loadedUsers} onClick={retrieveUsers}>
        Retrieve Users
      </Button>
    </Panel>
  );
};

const Panel = styled.div`
  border-radius: 6px;
  background-color: white;
  padding: 20px 25px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-width: 180px;
  align-self: flex-start;
  box-shadow: 0px 0px 10px lightgray;

  @media (max-width: 850px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const Label = styled.label`
  font-size: 14px;
`;

const Input = styled.input`
  margin-left: 5px;
  border: none;
  font-size: 16px;
  line-height: 18px;
  width: 100px;
  resize: horizontal;

  :active {
    width: auto;
  }

  :focus {
    min-width: 70px;
    outline: none;
  }
`;

const Button = styled.button`
  background-color: #52a27e;
  padding: 12px 20px;
  border: none;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  align-self: flex-start;

  :hover {
    background-color: #62be95;
  }

  :disabled {
    background-color: lightgray;
  }

  @media (max-width: 850px) {
    align-self: center;
  }
`;
