import { UserItemType } from "../enums/user-item-type";

export interface UserItemAction {
  content: string;
  type: UserItemType;
}
