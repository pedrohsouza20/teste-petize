import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-action',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-action.component.html',
  styleUrl: './button-action.component.scss'
})
export class ButtonActionComponent {
  @Input() text = '';
  @Input() conditionn = '';
  @Input() src = '';
}
