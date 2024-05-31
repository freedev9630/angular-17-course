import { Component, Input, signal } from '@angular/core';
import { SelectComponent } from '../select/select.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SelectComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input() counter = 0;

  items = signal(['Js', 'Java', 'Angular']);

  updateItems() {
    const items = [...this.items()];
    items[0] = 'Css';
    this.items.set(items);
  }
}
