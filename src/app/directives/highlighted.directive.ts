import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appHighlighted]',
  standalone: true
})
export class HighlightedDirective {

  constructor() {}

  @Input() appHighlighted = false;

  @Output() onToggleHighlighted = new EventEmitter<boolean>();

  @HostBinding('class.red-shadow')
    get cssClass() {
      return this.appHighlighted;
    }

  @HostListener('mouseenter')
    onMouseEnter() {
      this.appHighlighted = true;
      this.onToggleHighlighted.emit(this.appHighlighted);
    }

  @HostListener('mouseleave')
    onMouseLeave() {
      this.appHighlighted = false;
      this.onToggleHighlighted.emit(this.appHighlighted);
    }

  onToggle() {
    this.appHighlighted = !this.appHighlighted;
    this.onToggleHighlighted.emit(this.appHighlighted);
  }
}
