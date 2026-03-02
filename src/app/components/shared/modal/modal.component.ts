import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() title: string = '';
  @Input() isOpen: boolean = false;
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';

  @Output() onClose = new EventEmitter<void>();

  close() {
    this.onClose.emit();
  }
}
