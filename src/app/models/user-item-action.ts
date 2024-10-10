import { UserItemType } from "../enums/user-item-type";

export interface UserItemAction {
  content: number;
  type: UserItemType;
}
