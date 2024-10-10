import { UserType } from "../enums/user-type";
import { Address } from "./address";

export interface User {
  id: string;
  name: string;
  lastName: string;
  type: UserType;
  firstTestScore: number;
  secondTestScore: number;
  finalTestScore: number;
  address: Address;
  country: string;
  province: string;
  messages: string[];
}
