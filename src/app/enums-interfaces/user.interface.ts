import { UserStatus, SubscriptionType } from './user-status.enum';

export interface User {
  user_id: string;
  name: string;
  age: number;
  status: UserStatus;
  amountAvailable: number;
  subscriptionType: SubscriptionType;
  subscriptions: number[];
  notifications: string[];
}
