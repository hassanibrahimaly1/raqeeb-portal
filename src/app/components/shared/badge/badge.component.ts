import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss'
})
export class BadgeComponent {
  @Input() label: string = '';
  @Input() variant: 'success' | 'danger' | 'warning' | 'info' | 'primary' | 'secondary' = 'secondary';
  @Input() size: 'sm' | 'md' = 'md';
  @Input() isLight: boolean = true;
  @Input() isRounded: boolean = true;
}
