import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SocialMediaPlatform, SocialMediaType } from '../../enums-interfaces/social-network.enum';
import { SocialMediaEvent } from '../../enums-interfaces/social-network.interface';

@Component({
  selector: 'app-social-network-card',
  templateUrl: './social-network-card.component.html',
  styleUrl: './social-network-card.component.scss'
})
export class SocialNetworkCardComponent {
  @Input() socialMedia: SocialMediaPlatform = SocialMediaPlatform.YOUTUBE;
  @Input() color: string = '';

  @Output() addNewVideo = new EventEmitter<SocialMediaEvent>();

  onAddNewVideo() {
    this.addNewVideo.emit({
      platformSocialNetwork: this.socialMedia,
    });
  }
}
