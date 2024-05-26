import { Input } from "@angular/core";

export class IconsSvgValue {
  constructor() {
    this.getSvgCode('people');
  }

  private readonly icons = [
    {
      name: 'people',
      value: 'valor123',
    },
    {
      name: 'heart',
      value: '',
    },
    {
      name: 'company',
      value: '',
    },
    {
      name: 'location',
      value: '',
    },
    {
      name: 'email',
      value: '',
    },
    {
      name: 'website',
      value: '',
    },
    {
      name: 'twitter',
      value: '',
    },
    {
      name: 'star',
      value: '',
    },
  ];

  getSvgCode(symbol: string): string {
    const icons = [];
    let result = '';
    this.icons.forEach((icon, index, array) => {
      if (icon.name == symbol) {
        result = icon.value;
      }
    });
    return result;
  }
}
