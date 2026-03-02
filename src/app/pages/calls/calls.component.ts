import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Call {
  id: string;
  agent: string;
  number: string;
  direction: 'inbound' | 'outbound' | 'missed';
  duration: string;
  time: string;
  date: string;
  recorded: boolean;
  aiStatus: 'ready' | 'pending' | 'failed' | 'none';
  score: number | null;
  tone: string;
  flag: 'خطر' | 'فرصة' | '';
  tags: string[];
  device: string;
}

@Component({
  selector: 'app-calls',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calls.component.html',
  styleUrl: './calls.component.scss'
})
export class CallsComponent {
  searchText = '';
  filterDirection = '';
  filterAiStatus = '';
  selectedCall: Call | null = null;

  calls: Call[] = [
    { id: '1', agent: 'محمد العوضي', number: '+962799123456', direction: 'outbound', duration: '8:42', time: '09:14 ص', date: '1 مارس 2026', recorded: true, aiStatus: 'ready', score: 42, tone: 'عدواني', flag: 'خطر', tags: ['اعتراض السعر', 'منافس'], device: 'Samsung S24' },
    { id: '2', agent: 'سارة الزهراني', number: '+962776543210', direction: 'inbound', duration: '5:10', time: '10:02 ص', date: '1 مارس 2026', recorded: true, aiStatus: 'ready', score: 81, tone: 'إيجابي', flag: 'فرصة', tags: ['اهتمام بالمنتج', 'متابعة'], device: 'Samsung A55' },
    { id: '3', agent: 'خالد المطيري', number: '+962788001122', direction: 'outbound', duration: '12:05', time: '11:30 ص', date: '1 مارس 2026', recorded: true, aiStatus: 'pending', score: null, tone: '-', flag: '', tags: [], device: 'Samsung S23' },
    { id: '4', agent: 'ريم العتيبي', number: '+962791234567', direction: 'inbound', duration: '3:50', time: '12:15 م', date: '1 مارس 2026', recorded: true, aiStatus: 'ready', score: 90, tone: 'ودي', flag: 'فرصة', tags: ['إغلاق ناجح', 'عميل راضٍ'], device: 'Samsung S24' },
    { id: '5', agent: 'فيصل القحطاني', number: '+962755678901', direction: 'outbound', duration: '7:22', time: '01:05 م', date: '1 مارس 2026', recorded: false, aiStatus: 'none', score: null, tone: '-', flag: 'خطر', tags: [], device: 'Samsung A35' },
    { id: '6', agent: 'محمد العوضي', number: '+962799000111', direction: 'missed', duration: '0:00', time: '02:30 م', date: '1 مارس 2026', recorded: false, aiStatus: 'none', score: null, tone: '-', flag: '', tags: [], device: 'Samsung S24' },
    { id: '7', agent: 'سارة الزهراني', number: '+962779876543', direction: 'inbound', duration: '9:15', time: '03:10 م', date: '1 مارس 2026', recorded: true, aiStatus: 'ready', score: 66, tone: 'محايد', flag: '', tags: ['استفسار', 'دعم فني'], device: 'Samsung A55' },
    { id: '8', agent: 'خالد المطيري', number: '+962788112233', direction: 'outbound', duration: '4:00', time: '04:00 م', date: '1 مارس 2026', recorded: true, aiStatus: 'failed', score: null, tone: '-', flag: '', tags: [], device: 'Samsung S23' },
  ];

  get filtered(): Call[] {
    return this.calls.filter(c => {
      const q = this.searchText.toLowerCase();
      const matchSearch = !q || c.agent.includes(q) || c.number.includes(q) || c.tags.some(t => t.includes(q));
      const matchDir = !this.filterDirection || c.direction === this.filterDirection;
      const matchAi = !this.filterAiStatus || c.aiStatus === this.filterAiStatus;
      return matchSearch && matchDir && matchAi;
    });
  }

  dirLabel(d: Call['direction']): string {
    return { inbound: 'واردة', outbound: 'صادرة', missed: 'فائتة' }[d];
  }

  dirIcon(d: Call['direction']): string {
    return { inbound: 'fa-solid fa-phone-arrow-down-left', outbound: 'fa-solid fa-phone-arrow-up-right', missed: 'fa-solid fa-phone-missed' }[d];
  }

  scoreClass(s: number | null): string {
    if (s === null) return '';
    if (s >= 75) return 'good';
    if (s >= 50) return 'mid';
    return 'bad';
  }

  aiStatusLabel(s: Call['aiStatus']): string {
    return { ready: 'جاهز', pending: 'قيد المعالجة', failed: 'فشل', none: 'غير مسجل' }[s];
  }

  openDetail(call: Call) { this.selectedCall = call; }
  closeDetail() { this.selectedCall = null; }
}
