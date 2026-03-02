import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  activeTab: 'company' | 'notifications' | 'recording' | 'integrations' = 'company';

  // Company info
  companyName = 'شركة النخبة للتجارة';
  companyPhone = '+962799000000';
  timezone = 'Asia/Amman';

  // Notifications
  alertEmail = true;
  alertSms = false;
  dailyDigest = true;
  digestTime = '08:00';
  criticalOnly = false;

  // Recording policy
  recordAll = true;
  minDuration = 30;
  retentionDays = 90;
  aiAutoProcess = true;

  saved = false;

  save() {
    this.saved = true;
    setTimeout(() => this.saved = false, 2500);
  }
}
