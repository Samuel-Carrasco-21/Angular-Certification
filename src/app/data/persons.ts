import { Gender } from "../enums/gender";
import { IPerson } from "../models/person";

export const persons: IPerson[] = [
  {
    gender: Gender.MALE,
    name: "Jose Carrasco",
    age: 21
  },
  {
    gender: Gender.FEMALE,
    name: "Ambar Rojas",
    age: 17
  },
  {
    gender: Gender.OTHER,
    name: "Hugo Apaza",
    age: 22
  },
  {
    gender: Gender.MALE,
    name: "Ander Cayllan",
    age: 16
  },
];
