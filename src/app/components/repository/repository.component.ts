import { Component, Input } from '@angular/core';
import { IconInfoComponent } from '../icon-info/icon-info.component';

@Component({
  selector: 'app-repository',
  standalone: true,
  imports: [IconInfoComponent],
  templateUrl: './repository.component.html',
  styleUrl: './repository.component.scss'
})
export class RepositoryComponent {
  @Input() name = '';
  @Input() description = '';
  @Input() stargazers_count = '';
  @Input() url = '';
}
