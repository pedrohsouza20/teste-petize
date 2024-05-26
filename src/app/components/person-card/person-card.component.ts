import { Component, Input } from '@angular/core';
import { IconInfoComponent } from '../icon-info/icon-info.component';
import { ButtonActionComponent } from '../button-action/button-action.component';

@Component({
  selector: 'app-person-card',
  standalone: true,
  imports: [IconInfoComponent, ButtonActionComponent],
  templateUrl: './person-card.component.html',
  styleUrl: './person-card.component.scss',
})
export class PersonCardComponent {
  @Input() avatar_url = '';
  @Input() name = '';
  @Input() login = '';
  @Input() bio = '';
  @Input() symbol = '';
  @Input() text = '';
  @Input() followers = '';
  @Input() following = '';
  @Input() company = '';
  @Input() location = '';
  @Input() email = '';
  @Input() website = '';
  @Input() twitter_username = '';
  public twitterUrl(): string {
    return 'https://twitter.com/' + this.twitter_username;
  }

}
