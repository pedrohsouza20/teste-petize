import { Component, Input } from '@angular/core';
import { RepositoryComponent } from '../repository/repository.component';
import { GetRepositoriesService } from '../../services/get-repositories.service';
import { Repository } from '../../interfaces/Repository';
import { Observable } from 'rxjs';
import { ProfileComponent } from '../../pages/profile/profile.component';
import { CommonModule, NgFor } from '@angular/common';
import { User } from '../../classes/User';
import { UserProfileService } from '../../services/user-profile.service';

@Component({
  selector: 'app-repositories',
  standalone: true,
  imports: [RepositoryComponent, CommonModule, NgFor],
  templateUrl: './repositories.component.html',
  styleUrl: './repositories.component.scss',
})
export class RepositoriesComponent {
  @Input() repositoriesUrl = '';
  repositoriesData$: Observable<Repository[]> | any;

  constructor(
    getRepositoriesService: GetRepositoriesService,
    userProfileService: UserProfileService
  ) {
    let aux;
    let userName = window.location.pathname.split('/')[2];
    getRepositoriesService.getRepositories(`https://api.github.com/users/${userName}/repos`).subscribe((data) => {
      this.repositoriesData$ = data;
      console.log(this.repositoriesData$);

      // Método for para ordenar os repositórios pela quantidade de stars,
      // baseado em um projeto que fiz anos atrás, nos seguintes links:

      // https://github.com/pedrohsouza20/Ascending-order-with-JavaScript
      // https://github.com/pedrohsouza20/Ascending-Order
      for (let i = 0; i < this.repositoriesData$.length; i++) {
        for (let j = i; j < this.repositoriesData$.length; j++) {
          if (
            this.repositoriesData$[i].stargazers_count <
            this.repositoriesData$[j].stargazers_count
          ) {
            aux = this.repositoriesData$[i];
            this.repositoriesData$[i] = this.repositoriesData$[j];
            this.repositoriesData$[j] = aux;
          }
        }
      }

      console.log(this.repositoriesData$);

    });
  }
}
