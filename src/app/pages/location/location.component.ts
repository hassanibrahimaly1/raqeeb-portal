import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Agent {
  id: string;
  name: string;
  device: string;
  status: 'online' | 'offline';
  lastSeen: string;
  battery: number;
  location: string;
}

interface Stop {
  time: string;
  duration: string;
  address: string;
  type: 'start' | 'stop' | 'end';
  durationMins: number;
}

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent {
  selectedAgent: Agent | null = null;
  viewMode: 'live' | 'route' = 'live';

  agents: Agent[] = [
    { id: '1', name: 'محمد العوضي', device: 'Samsung S24', status: 'online', lastSeen: 'الآن', battery: 78, location: 'وسط عمّان، الأردن' },
    { id: '2', name: 'سارة الزهراني', device: 'Samsung A55', status: 'online', lastSeen: 'منذ 3 دقائق', battery: 54, location: 'شارع الملكة رانيا' },
    { id: '3', name: 'خالد المطيري', device: 'Samsung S23', status: 'offline', lastSeen: 'منذ ساعتين', battery: 12, location: 'آخر موقع: الشميساني' },
    { id: '4', name: 'ريم العتيبي', device: 'Samsung S24', status: 'online', lastSeen: 'منذ دقيقة', battery: 91, location: 'دوار الداخلية' },
    { id: '5', name: 'فيصل القحطاني', device: 'Samsung A35', status: 'offline', lastSeen: 'منذ 5 ساعات', battery: 3, location: 'آخر موقع: الجاردنز' },
  ];

  stops: Stop[] = [
    { time: '08:00 ص', duration: '—', address: 'نقطة الانطلاق — مكتب الشركة، الشميساني', type: 'start', durationMins: 0 },
    { time: '08:45 ص', duration: '22 دقيقة', address: 'عميل: شركة التقنية المتقدمة، الرابية', type: 'stop', durationMins: 22 },
    { time: '10:05 ص', duration: '8 دقائق', address: 'وقوف — كافيه بلو، شارع الجامعة', type: 'stop', durationMins: 8 },
    { time: '10:55 ص', duration: '35 دقيقة', address: 'عميل: مؤسسة النخبة للتجارة، المدينة', type: 'stop', durationMins: 35 },
    { time: '12:30 م', duration: '45 دقيقة', address: 'استراحة غداء — مطعم الرومانسية', type: 'stop', durationMins: 45 },
    { time: '02:00 م', duration: '18 دقيقة', address: 'عميل: صيدلية الشفاء، الصويفية', type: 'stop', durationMins: 18 },
    { time: '03:20 م', duration: '—', address: 'نقطة الوصول — مكتب الشركة، الشميساني', type: 'end', durationMins: 0 },
  ];

  // Map dots (fake coordinate positions as % for the SVG map placeholder)
  mapDots = [
    { x: 42, y: 35, label: 'محمد', active: true },
    { x: 58, y: 28, label: 'سارة', active: true },
    { x: 30, y: 55, label: 'خالد', active: false },
    { x: 65, y: 60, label: 'ريم', active: true },
    { x: 50, y: 72, label: 'فيصل', active: false },
  ];

  selectAgent(a: Agent) { this.selectedAgent = this.selectedAgent?.id === a.id ? null : a; }
  batteryClass(b: number): string { return b > 30 ? 'bat-ok' : b > 10 ? 'bat-warn' : 'bat-low'; }
  stopWorkRelated(s: Stop): boolean { return s.durationMins >= 15 && s.type === 'stop'; }
}
