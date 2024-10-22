import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../enums-interfaces/user.interface';
import { Subscription } from 'rxjs';
import { HomeComponent } from '../home/home.component';
import { SocialMediaPlatform } from '../../enums-interfaces/social-network.enum';
import { socialNetworks } from '../../../data';

@Component({
  selector: 'app-info-user-page',
  templateUrl: './info-user-page.component.html',
  styleUrl: './info-user-page.component.scss'
})
export class InfoUserPageComponent implements OnInit, OnDestroy {
  public selectedUser: User | undefined;
  public subscription: Subscription | undefined;
  public socials: SocialMediaPlatform[] = [];

  constructor(
    private route: ActivatedRoute,
    public homeComponent: HomeComponent,
  ) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('user_id');

    if (userId && this.homeComponent && this.homeComponent.data$) {
      this.subscription = this.homeComponent.data$.subscribe((users: User[]) => {
        this.selectedUser = users.find(user => user.user_id === userId) as User;
        this.socials = [...this.selectedUser.subscriptions.map(socialId => this.getPlatformById(socialId))];
      });
    }
  }

  getPlatformByText(text: string): SocialMediaPlatform {
    return text.includes(SocialMediaPlatform.FACEBOOK) ? SocialMediaPlatform.FACEBOOK :
      text.includes(SocialMediaPlatform.INSTAGRAM) ? SocialMediaPlatform.INSTAGRAM :
        text.includes(SocialMediaPlatform.TIKTOK) ? SocialMediaPlatform.TIKTOK :
          text.includes(SocialMediaPlatform.WHATSAPP) ? SocialMediaPlatform.WHATSAPP : SocialMediaPlatform.YOUTUBE
  }

  getPlatformById(num: number): SocialMediaPlatform {
    const socialNetworkFound: SocialMediaPlatform = socialNetworks.find(social => social.id === num)?.platform as SocialMediaPlatform;
    return socialNetworkFound ?? SocialMediaPlatform.FACEBOOK;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
