import { createContext, useContext } from "react";

import { User } from "./types/user";

interface UsersState {
  users: User[];
  min: string;
  max: string;
  minError: string;
  maxError: string;
  loadingUsers: boolean;
  loadedUsers: boolean;
  searchName: string;
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  setMin: React.Dispatch<React.SetStateAction<string>>;
  setMax: React.Dispatch<React.SetStateAction<string>>;
  setMinError: React.Dispatch<React.SetStateAction<string>>;
  setMaxError: React.Dispatch<React.SetStateAction<string>>;
  setLoadingUsers: React.Dispatch<React.SetStateAction<boolean>>;
  setLoadedUsers: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchName: React.Dispatch<React.SetStateAction<string>>;
}

const UsersContext = createContext({} as UsersState);

export const UsersProvider = UsersContext.Provider;

export const useUsers = () => useContext(UsersContext);
