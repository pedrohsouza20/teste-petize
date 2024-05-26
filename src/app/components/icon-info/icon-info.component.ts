import { Component, Input } from '@angular/core';
import { IconsSvgValue } from './icons-svg-value';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-info',
  standalone: true,
  imports: [CommonModule],
  providers:[IconsSvgValue],
  templateUrl: './icon-info.component.html',
  styleUrl: './icon-info.component.scss',
})
export class IconInfoComponent {
  @Input() symbolL = '';
  @Input() content = '';
  /*constructor(iconsSvgValue: IconsSvgValue) {
    this.iconSrc = iconsSvgValue.getSvgCode('people');
    console.log('valor do icone: ', this.iconSrc);
  }*/
}
