export interface User {
  age: number;
  name: {
    firstName: string;
    lastName: string;
  };
}

export interface ResUser {
  age: number;
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
}
