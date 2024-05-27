import { UserProfile } from './../../interfaces/UserProfile';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProfileService } from '../../services/user-profile.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { PersonCardComponent } from '../../components/person-card/person-card.component';
import { RepositoriesComponent } from '../../components/repositories/repositories.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    PersonCardComponent,
    RepositoriesComponent,
  ],
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
        .subscribe((data) => {
          this.profileData$ = data;
          UserProfileService.setUserName(this.profileData$.login);
        });
    }
  }
}
