import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DailyReport {
  id: string;
  date: string;
  dateAr: string;
  totalCalls: number;
  recorded: number;
  aiReady: number;
  avgScore: number;
  topFlags: { label: string; count: number; type: 'danger' | 'success' }[];
  reviewQueue: number;
  alerts: number;
  highlights: string[];
  topAgents: { name: string; score: number }[];
  lowAgents: { name: string; score: number; reason: string }[];
}

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {
  selectedReport: DailyReport | null = null;

  reports: DailyReport[] = [
    {
      id: '1',
      date: '2026-03-01',
      dateAr: 'السبت، 1 مارس 2026',
      totalCalls: 48,
      recorded: 45,
      aiReady: 40,
      avgScore: 67,
      topFlags: [
        { label: 'حالات خطر', count: 5, type: 'danger' },
        { label: 'فرص مبيعات', count: 8, type: 'success' },
      ],
      reviewQueue: 17,
      alerts: 3,
      highlights: [
        'متوسط الأداء اليوم 67% — أقل من أمس بـ 4 درجات.',
        '5 مكالمات صُنِّفت "خطر" — الأغلب بسبب نبرة عدوانية.',
        '8 فرص مبيعات رُصدت في مكالمات الفريق.',
        'الموظف فيصل القحطاني لم يسجل مكالمتين — يستوجب المتابعة.',
        'جهاز Samsung A35 لم يرفع تسجيلاً منذ 6 ساعات.',
      ],
      topAgents: [
        { name: 'ريم العتيبي', score: 90 },
        { name: 'سارة الزهراني', score: 81 },
      ],
      lowAgents: [
        { name: 'فيصل القحطاني', score: 38, reason: 'نبرة عدوانية، اعتراض غير محلول' },
        { name: 'محمد العوضي', score: 42, reason: 'انتهاء مكالمة مفاجئ، لا إغلاق' },
      ],
    },
    {
      id: '2',
      date: '2026-02-28',
      dateAr: 'الجمعة، 28 فبراير 2026',
      totalCalls: 52,
      recorded: 52,
      aiReady: 48,
      avgScore: 71,
      topFlags: [
        { label: 'حالات خطر', count: 3, type: 'danger' },
        { label: 'فرص مبيعات', count: 11, type: 'success' },
      ],
      reviewQueue: 12,
      alerts: 1,
      highlights: [
        'أفضل يوم هذا الأسبوع — متوسط أداء 71%.',
        '11 فرصة مبيعات — يوم قوي للفريق.',
        'نسبة التسجيل 100% — لا توجد ثغرات.',
        'تنبيه واحد فقط: بطارية منخفضة على جهاز ريم.',
      ],
      topAgents: [
        { name: 'ريم العتيبي', score: 92 },
        { name: 'خالد المطيري', score: 84 },
      ],
      lowAgents: [
        { name: 'محمد العوضي', score: 51, reason: 'اعتراض متكرر على السعر' },
      ],
    },
    {
      id: '3',
      date: '2026-02-27',
      dateAr: 'الخميس، 27 فبراير 2026',
      totalCalls: 39,
      recorded: 36,
      aiReady: 30,
      avgScore: 59,
      topFlags: [
        { label: 'حالات خطر', count: 7, type: 'danger' },
        { label: 'فرص مبيعات', count: 4, type: 'success' },
      ],
      reviewQueue: 21,
      alerts: 5,
      highlights: [
        'أسوأ يوم هذا الأسبوع — 7 حالات خطر.',
        '3 مكالمات غير مسجلة بسبب مشكلة في الصلاحيات.',
        'قائمة المراجعة كبيرة — 21 مكالمة تنتظر.',
        '5 تنبيهات نشطة — تحتاج إجراء عاجل.',
      ],
      topAgents: [
        { name: 'سارة الزهراني', score: 78 },
      ],
      lowAgents: [
        { name: 'فيصل القحطاني', score: 31, reason: 'نبرة سلبية وإنهاء مكالمة مبكر' },
        { name: 'محمد العوضي', score: 44, reason: 'ضعف في الإغلاق' },
        { name: 'خالد المطيري', score: 48, reason: 'تحدث طويل، لا نتيجة' },
      ],
    },
  ];

  scoreClass(s: number): string {
    if (s >= 75) return 'good';
    if (s >= 50) return 'mid';
    return 'bad';
  }

  selectReport(r: DailyReport) {
    this.selectedReport = r;
  }

  ngOnInit() {
    this.selectedReport = this.reports[0]; // auto-open latest
  }
}
