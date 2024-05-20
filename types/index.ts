type TUser = {
  matchPassword?(password: string, password1: string): unknown;
  username: string;
  email: string;
  password: string;
  roles: string[];
};
