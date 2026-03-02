import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'owner' | 'manager' | 'viewer';
  status: 'active' | 'inactive';
  lastLogin: string;
  devices: number;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  searchText = '';
  filterRole = '';
  showInviteModal = false;
  inviteEmail = '';
  inviteRole: User['role'] = 'viewer';

  users: User[] = [
    { id: '1', name: 'أحمد الشمري', email: 'ahmed@company.jo', role: 'owner', status: 'active', lastLogin: 'منذ 5 دقائق', devices: 5 },
    { id: '2', name: 'نورة الغامدي', email: 'noura@company.jo', role: 'manager', status: 'active', lastLogin: 'منذ ساعة', devices: 3 },
    { id: '3', name: 'عمر الحربي', email: 'omar@company.jo', role: 'viewer', status: 'active', lastLogin: 'منذ يومين', devices: 2 },
    { id: '4', name: 'لمى الزهراني', email: 'lama@company.jo', role: 'viewer', status: 'inactive', lastLogin: 'منذ أسبوع', devices: 0 },
  ];

  get filtered(): User[] {
    const q = this.searchText.toLowerCase();
    return this.users.filter(u => {
      const matchSearch = !q || u.name.includes(q) || u.email.includes(q);
      const matchRole = !this.filterRole || u.role === this.filterRole;
      return matchSearch && matchRole;
    });
  }

  roleLabel(r: User['role']): string {
    return { owner: 'مالك', manager: 'مدير', viewer: 'مشاهد' }[r];
  }

  roleIcon(r: User['role']): string {
    return { owner: 'fa-solid fa-crown', manager: 'fa-solid fa-user-tie', viewer: 'fa-solid fa-eye' }[r];
  }

  sendInvite() {
    if (this.inviteEmail) {
      this.users.push({
        id: String(Date.now()), name: this.inviteEmail.split('@')[0],
        email: this.inviteEmail, role: this.inviteRole,
        status: 'inactive', lastLogin: 'لم يسجل دخول', devices: 0
      });
      this.showInviteModal = false;
      this.inviteEmail = '';
    }
  }
}
