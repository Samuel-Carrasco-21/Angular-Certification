import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationCardComponent } from './notification-card/notification-card.component';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { SocialNetworkCardComponent } from './social-network-card/social-network-card.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserListComponent } from './user-list/user-list.component';

const arrayComponents = [NotificationCardComponent, NotificationListComponent, SocialNetworkCardComponent, UserCardComponent, UserListComponent];

@NgModule({
  declarations: arrayComponents,
  imports: [
    CommonModule,
  ],
  exports: arrayComponents
})
export class ComponentsModule { }
