import { ProfileComponent } from './../../pages/profile/profile.component';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() placeholder = '';
  constructor(private route$: ActivatedRoute) {}
}
