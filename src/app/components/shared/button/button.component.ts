import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() variant: 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() icon?: string;
  @Input() iconPos: 'start' | 'end' = 'start';
  @Input() disabled: boolean = false;
  @Input() isLoading: boolean = false;
  @Input() type: 'button' | 'submit' = 'button';
  @Input() fullWidth: boolean = false;

  @Output() onClick = new EventEmitter<MouseEvent>();

  handleClick(event: MouseEvent) {
    if (!this.disabled && !this.isLoading) {
      this.onClick.emit(event);
    }
  }
}
