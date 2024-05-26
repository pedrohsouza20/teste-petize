import { Component } from '@angular/core';
import { Observable, of, catchError } from 'rxjs';
import { UserProfile } from '../../interfaces/UserProfile';
import { UserProfileService } from '../../services/user-profile.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  providers: [UserProfileService],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  profileData$: Observable<UserProfile> | any;

  constructor(
    private userProfileService: UserProfileService,
    private readonly route$: ActivatedRoute
  ) {
    const user = this.route$.snapshot.paramMap.get('user');
    // Verifica se foi passado, como parâmetro da rota, algum valor válido
    if (user != null) {
      this.profileData$ = this.userProfileService
        .getUserByUserName(user)
        .subscribe((data) => (this.profileData$ = data));
    }
  }
}
