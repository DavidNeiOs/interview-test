import axios from "axios";

import { ResUser, User } from "../types/user";

const API_URL = "http://localhost:8099";

const usersInstance = axios.create({
  baseURL: API_URL,
});

const mapUser = ({ age, name }: ResUser): User => ({
  age,
  name,
});

export const getUsers = async (): Promise<User[]> => {
  const kidsPromise = usersInstance
    .get("/users/kids")
    .then((res) => res.data.data);
  const adultsPromise = usersInstance
    .get("/users/adults")
    .then((res) => res.data.data);
  const seniorsPromise = usersInstance
    .get("users/seniors")
    .then((res) => res.data);

  const users = await Promise.all([
    kidsPromise,
    adultsPromise,
    seniorsPromise,
  ]).then((res) => res.flat());

  return users
    .map(mapUser)
    .sort(({ age: ageA, name: nameA }, { age: ageB, name: nameB }) => {
      if (nameA.firstName > nameB.firstName) return 1;
      else if (nameA.firstName < nameB.firstName) return -1;
      else {
        return ageB - ageA;
      }
    });
};
