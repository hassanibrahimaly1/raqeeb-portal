import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Device {
  id: string;
  name: string;
  agent: string;
  model: string;
  os: string;
  enrolled: string;
  lastSeen: string;
  battery: number;
  status: 'healthy' | 'warning' | 'critical' | 'offline';
  recording: boolean;
  uploadOk: boolean;
  permissions: { mic: boolean; location: boolean; storage: boolean };
  callsToday: number;
  enrollCode: string;
}

@Component({
  selector: 'app-devices',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.scss'
})
export class DevicesComponent {
  searchText = '';
  filterStatus = '';
  selectedDevice: Device | null = null;
  showEnrollModal = false;

  devices: Device[] = [
    {
      id: '1', name: 'هاتف محمد', agent: 'محمد العوضي', model: 'Samsung Galaxy S24',
      os: 'Android 14', enrolled: '15 يناير 2026', lastSeen: 'الآن',
      battery: 78, status: 'warning', recording: false, uploadOk: true,
      permissions: { mic: false, location: true, storage: true },
      callsToday: 12, enrollCode: 'RQ-7X4K'
    },
    {
      id: '2', name: 'هاتف سارة', agent: 'سارة الزهراني', model: 'Samsung Galaxy A55',
      os: 'Android 14', enrolled: '20 يناير 2026', lastSeen: 'منذ 3 دقائق',
      battery: 54, status: 'healthy', recording: true, uploadOk: true,
      permissions: { mic: true, location: true, storage: true },
      callsToday: 8, enrollCode: 'RQ-2M9P'
    },
    {
      id: '3', name: 'هاتف خالد', agent: 'خالد المطيري', model: 'Samsung Galaxy S23',
      os: 'Android 13', enrolled: '10 فبراير 2026', lastSeen: 'منذ ساعتين',
      battery: 12, status: 'critical', recording: true, uploadOk: false,
      permissions: { mic: true, location: true, storage: true },
      callsToday: 5, enrollCode: 'RQ-9R1N'
    },
    {
      id: '4', name: 'هاتف ريم', agent: 'ريم العتيبي', model: 'Samsung Galaxy S24',
      os: 'Android 14', enrolled: '5 فبراير 2026', lastSeen: 'منذ دقيقة',
      battery: 91, status: 'healthy', recording: true, uploadOk: true,
      permissions: { mic: true, location: true, storage: true },
      callsToday: 9, enrollCode: 'RQ-4F6T'
    },
    {
      id: '5', name: 'هاتف فيصل', agent: 'فيصل القحطاني', model: 'Samsung Galaxy A35',
      os: 'Android 13', enrolled: '1 مارس 2026', lastSeen: 'منذ 5 ساعات',
      battery: 3, status: 'offline', recording: false, uploadOk: false,
      permissions: { mic: true, location: false, storage: true },
      callsToday: 3, enrollCode: 'RQ-8B3W'
    },
  ];

  get filtered(): Device[] {
    const q = this.searchText.toLowerCase();
    return this.devices.filter(d => {
      const matchSearch = !q || d.name.includes(q) || d.agent.includes(q) || d.model.toLowerCase().includes(q);
      const matchStatus = !this.filterStatus || d.status === this.filterStatus;
      return matchSearch && matchStatus;
    });
  }

  statusLabel(s: Device['status']): string {
    return { healthy: 'سليم', warning: 'تحذير', critical: 'حرج', offline: 'غير متصل' }[s];
  }

  batteryClass(b: number): string {
    return b > 30 ? 'bat-ok' : b > 10 ? 'bat-warn' : 'bat-low';
  }

  batteryIcon(b: number): string {
    if (b > 60) return 'fa-battery-full';
    if (b > 30) return 'fa-battery-half';
    if (b > 10) return 'fa-battery-quarter';
    return 'fa-battery-empty';
  }

  openDetail(d: Device) { this.selectedDevice = d; }
  closeDetail() { this.selectedDevice = null; }
}
