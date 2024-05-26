import { Component } from '@angular/core';
import { Observable, of, catchError } from 'rxjs';
import { UserProfile } from '../../interfaces/UserProfile';
import { UserProfileService } from '../../services/user-profile.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  providers: [UserProfileService],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  profileData$: Observable<UserProfile> | any;

  constructor(private userProfileService: UserProfileService) {
    this.profileData$ = this.userProfileService
      .getUserByUserName('pedrohsouza20')
      .subscribe((data) => (this.profileData$ = data));
  }
}
