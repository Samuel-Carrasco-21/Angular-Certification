import { data } from "../../../data";
import { User } from "../models/user";

export const getUsers = (): User[] => {
  return Object.entries(data).map(([id, entry]: [string, any]) => ({
    id,
    ...entry,
  })) as User[];
};
