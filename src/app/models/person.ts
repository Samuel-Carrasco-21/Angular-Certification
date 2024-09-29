import { Gender } from "../enums/gender";

export interface IPerson {
  gender: Gender;
  name: string;
  age: number;
  hasDiscount?: boolean;
};
