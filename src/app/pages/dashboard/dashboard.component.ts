import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface KpiCard {
  label: string;
  value: string | number;
  sub: string;
  icon: string;
  variant: 'primary' | 'success' | 'danger' | 'warning';
}

interface ReviewCall {
  agent: string;
  number: string;
  duration: string;
  score: number;
  flag: 'خطر' | 'فرصة' | '';
  time: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  today = new Date().toLocaleDateString('ar-EG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  kpis: KpiCard[] = [
    { label: 'مكالمات اليوم', value: 48, sub: '+12% عن أمس', icon: 'fa-solid fa-phone', variant: 'primary' },
    { label: 'جاهز للمراجعة', value: 17, sub: 'تحليل ذكاء اصطناعي جاهز', icon: 'fa-solid fa-circle-check', variant: 'success' },
    { label: 'تنبيهات نشطة', value: 3, sub: 'تحتاج إجراء', icon: 'fa-solid fa-circle-exclamation', variant: 'danger' },
    { label: 'معدل التسجيل', value: '94%', sub: '2 مكالمة غير مسجلة', icon: 'fa-solid fa-microphone', variant: 'warning' },
  ];

  reviewQueue: ReviewCall[] = [
    { agent: 'محمد العوضي', number: '+962799123456', duration: '8:42', score: 42, flag: 'خطر', time: '09:14 ص' },
    { agent: 'سارة الزهراني', number: '+962776543210', duration: '5:10', score: 81, flag: 'فرصة', time: '10:02 ص' },
    { agent: 'خالد المطيري', number: '+962788001122', duration: '12:05', score: 57, flag: '', time: '11:30 ص' },
    { agent: 'ريم العتيبي', number: '+962791234567', duration: '3:50', score: 90, flag: 'فرصة', time: '12:15 م' },
    { agent: 'فيصل القحطاني', number: '+962755678901', duration: '7:22', score: 38, flag: 'خطر', time: '01:05 م' },
  ];

  alerts = [
    { device: 'Samsung S24 – محمد', message: 'تم إيقاف تسجيل المكالمات', severity: 'danger', time: 'منذ ساعتين' },
    { device: 'Samsung A55 – خالد', message: 'لم يُرفع تسجيل منذ 6 ساعات', severity: 'warning', time: 'منذ 6 ساعات' },
    { device: 'Samsung S23 – ريم', message: 'بطارية منخفضة 12%', severity: 'warning', time: 'منذ 30 دقيقة' },
  ];

  scoreClass(score: number): string {
    if (score >= 75) return 'score-good';
    if (score >= 50) return 'score-mid';
    return 'score-bad';
  }
}
