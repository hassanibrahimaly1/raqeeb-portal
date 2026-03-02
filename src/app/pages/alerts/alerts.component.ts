import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Alert {
  id: string;
  device: string;
  agent: string;
  type: 'recording_disabled' | 'upload_failed' | 'battery_low' | 'permission_revoked' | 'offline';
  message: string;
  severity: 'critical' | 'warning' | 'info';
  time: string;
  acked: boolean;
}

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.scss'
})
export class AlertsComponent {
  filterSeverity = '';
  filterAcked = 'unacked';

  alerts: Alert[] = [
    { id: '1', device: 'Samsung S24', agent: 'محمد العوضي', type: 'recording_disabled', message: 'تم إيقاف تسجيل المكالمات يدوياً', severity: 'critical', time: 'منذ ساعتين', acked: false },
    { id: '2', device: 'Samsung A35', agent: 'فيصل القحطاني', type: 'upload_failed', message: 'فشل رفع التسجيلات منذ 6 ساعات', severity: 'critical', time: 'منذ 6 ساعات', acked: false },
    { id: '3', device: 'Samsung S23', agent: 'ريم العتيبي', type: 'battery_low', message: 'مستوى البطارية منخفض جداً: 3%', severity: 'warning', time: 'منذ 30 دقيقة', acked: false },
    { id: '4', device: 'Samsung A55', agent: 'سارة الزهراني', type: 'permission_revoked', message: 'تم سحب صلاحية الوصول إلى الميكروفون', severity: 'critical', time: 'منذ يوم', acked: false },
    { id: '5', device: 'Samsung S23', agent: 'خالد المطيري', type: 'offline', message: 'الجهاز غير متصل منذ أكثر من ساعتين', severity: 'warning', time: 'منذ ساعتين', acked: true },
    { id: '6', device: 'Samsung S24', agent: 'محمد العوضي', type: 'battery_low', message: 'مستوى البطارية منخفض: 12%', severity: 'warning', time: 'أمس، 04:30 م', acked: true },
    { id: '7', device: 'Samsung A35', agent: 'فيصل القحطاني', type: 'recording_disabled', message: 'تسجيل المكالمات معطل — مطلوب إعادة تفعيل', severity: 'critical', time: 'أمس، 02:10 م', acked: true },
  ];

  get filtered(): Alert[] {
    return this.alerts.filter(a => {
      const matchSev = !this.filterSeverity || a.severity === this.filterSeverity;
      const matchAck = this.filterAcked === '' || (this.filterAcked === 'unacked' ? !a.acked : a.acked);
      return matchSev && matchAck;
    });
  }

  get unackedCount(): number { return this.alerts.filter(a => !a.acked).length; }

  acknowledge(alert: Alert) { alert.acked = true; }
  acknowledgeAll() { this.filtered.filter(a => !a.acked).forEach(a => a.acked = true); }

  typeIcon(t: Alert['type']): string {
    return {
      recording_disabled: 'fa-solid fa-microphone-slash',
      upload_failed: 'fa-solid fa-cloud-arrow-up',
      battery_low: 'fa-solid fa-battery-quarter',
      permission_revoked: 'fa-solid fa-shield-exclamation',
      offline: 'fa-solid fa-wifi-slash',
    }[t];
  }

  typeLabel(t: Alert['type']): string {
    return {
      recording_disabled: 'تسجيل معطل',
      upload_failed: 'فشل الرفع',
      battery_low: 'بطارية منخفضة',
      permission_revoked: 'صلاحية مسحوبة',
      offline: 'الجهاز غير متصل',
    }[t];
  }
}
