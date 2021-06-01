import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useUsers } from "../usersContext";
import { InputContainer } from "./input-container";

export const TableComponent: React.FC = () => {
  const { users, min, max, searchName, setSearchName } = useUsers();

  const [showUsers, setShowUsers] = useState(users);

  useEffect(() => {
    setShowUsers(users);
  }, [users]);

  useEffect(() => {
    let minNumber = parseInt(min);
    let maxNumber = parseInt(max);

    minNumber = isNaN(minNumber) ? 0 : minNumber;
    maxNumber = isNaN(maxNumber) ? 150 : maxNumber;

    setShowUsers(
      users
        ? users.filter((user) => user.age > minNumber && user.age < maxNumber)
        : []
    );
  }, [min, max]);

  return (
    <TableContainer>
      <InputContainerPlus>
        <IconContainer>
          <img
            src={process.env.PUBLIC_URL + "/mag-glass.svg"}
            alt="magnifying glass"
          />
        </IconContainer>
        <Input
          name="search"
          size={1}
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          type="text"
          placeholder="Search users"
        />
      </InputContainerPlus>
      <Hr />

      <Table>
        <TableRowHeading>
          <CheckBoxContainer style={{ content: "" }} />
          <TableHeading>
            Name
            <SortArrows
              src={process.env.PUBLIC_URL + "/sort-arrows.svg"}
              alt="sort arrows name"
            />
          </TableHeading>
          <TableHeading>
            Age
            <SortArrows
              src={process.env.PUBLIC_URL + "/sort-arrows.svg"}
              alt="sort arrows name"
            />
          </TableHeading>
        </TableRowHeading>
        {showUsers.length ? (
          showUsers.map((user) => {
            return (
              <TableRowData
                key={`${user.name.firstName}_${user.name.lastName}_${user.age}`}
              >
                <CheckBoxContainer>
                  <input type="checkbox" />
                </CheckBoxContainer>
                <TableRowInfo>{`${user.name.firstName} ${user.name.lastName}`}</TableRowInfo>
                <TableRowInfo>{user.age}</TableRowInfo>
              </TableRowData>
            );
          })
        ) : (
          <TableRowData style={{ justifyContent: "center" }}>
            PRESS THE RETRIEVE BUTTON OR CHANGE FILTERS
          </TableRowData>
        )}
      </Table>
    </TableContainer>
  );
};

const TableContainer = styled.div`
  border-radius: 6px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  background-color: white;
  flex-grow: 2;
  box-shadow: 0px 0px 10px lightgray;

  @media (max-width: 850px) {
    width: 100%;
    margin-left: 0;
  }
`;

const IconContainer = styled.div`
  height: 16px;
  width: 16px;
  color: lightgray;
`;

const InputContainerPlus = styled(InputContainer)`
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
`;

const Input = styled.input`
  margin-left: 5px;
  border: none;
  font-size: 14px;
  line-height: 18px;
  min-width: 200px;

  ::placeholder {
    color: lightgray;
  }

  :focus {
    outline: none;
  }
`;

const Hr = styled.div`
  content: "";
  border-top: 1px solid #dadada;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const TableRow = styled.div`
  display: flex;
`;

const TableRowHeading = styled(TableRow)`
  margin: 20px 0;
  padding: 0 20px;
`;

const TableRowData = styled(TableRow)`
  border-bottom: 1px solid #dadada;
  padding: 20px;
`;

const CheckBoxContainer = styled.div`
  flex-grow: 1;
  flex-basis: 0;
`;

const TableRowInfo = styled.div`
  flex-grow: 2;
  flex-basis: 0;
  display: flex;
`;

const TableHeading = styled(TableRowInfo)`
  align-items: center;
  font-weight: bold;
`;

const SortArrows = styled.img`
  width: 8px;
  height: 8px;
  margin-left: 6px;
  cursor: pointer;
`;
