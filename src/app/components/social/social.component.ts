import { Component, Input } from '@angular/core';
import { SocialMediaPlatform } from '../../enums-interfaces/social-network.enum';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss'
})
export class SocialComponent {
  @Input() platformGotten!: SocialMediaPlatform;
}
