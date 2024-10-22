import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { data } from '../../../data';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ComponentsModule } from '../../components/components.module';
import { SocialMediaPlatform } from '../../enums-interfaces/social-network.enum';
import { SocialMediaEvent } from '../../enums-interfaces/social-network.interface';
import { User } from '../../enums-interfaces/user.interface';
import { SubscriptionType, UserStatus } from '../../enums-interfaces/user-status.enum';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, ComponentsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit, OnDestroy {
  public userData: User[] = [];

  private dataSubject?: BehaviorSubject<any>;

  public data$?: Observable<any>;

  ngOnDestroy(): void {
    this.dataSubject?.unsubscribe();
  }

  ngOnInit(): void {
    this.userData = Object.values(data).map(user => user as User);
    this.dataSubject = new BehaviorSubject<User[]>(this.userData);
    this.data$ = this.dataSubject.asObservable();
  }

  updateData(newData: any): void {
    this.dataSubject?.next(newData);
  }

  getData(): any {
    return this.dataSubject?.value;
  }

  handleAddNewVideo(event: SocialMediaEvent): void {
    const currentData: User[] = this.getData();

    currentData.forEach((user) => {
      const oldNot = [...user.notifications];

      user.notifications = [
        ...oldNot,
        `${event.platformSocialNetwork} added a new ${[SocialMediaPlatform.YOUTUBE, SocialMediaPlatform.TIKTOK].includes(event.platformSocialNetwork) ? 'video' :
          [SocialMediaPlatform.INSTAGRAM, SocialMediaPlatform.FACEBOOK].includes(event.platformSocialNetwork) ? 'story' : 'message'
        }`,
      ];

      const isPremium = user.subscriptionType === SubscriptionType.PREMIUM;

      const sizeNot = user.notifications.length;

      if (!isPremium && (user.notifications[sizeNot - 1].includes(SocialMediaPlatform.TIKTOK) || user.notifications[sizeNot - 1].includes(SocialMediaPlatform.WHATSAPP)) || user.status === UserStatus.INACTIVE) {
        user.notifications.splice(sizeNot - 1, 1);
      }

      if (user.status === UserStatus.INACTIVE) {
        return;
      }

      if (user.amountAvailable > 0 && isPremium) {
        const amountAvailable = user.amountAvailable - 5;
        user.amountAvailable = amountAvailable >= 0 ? amountAvailable : 0;
      }

      if (user.amountAvailable === 0 && isPremium) {
        user.subscriptionType = SubscriptionType.FREE;
      }

    });

    this.updateData(currentData);
  }

  getColor(socialMedia: SocialMediaPlatform): string {
    switch (socialMedia) {
      case SocialMediaPlatform.YOUTUBE:
        return 'red';
      case SocialMediaPlatform.FACEBOOK:
        return 'blue';
      case SocialMediaPlatform.TIKTOK:
        return 'purple';
      case SocialMediaPlatform.INSTAGRAM:
        return 'yellow';
      case SocialMediaPlatform.WHATSAPP:
        return 'green';
      default:
        return 'gray';
    }
  }
}
