import { Component, Input, ContentChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ColumnDef {
  key: string;
  label: string;
  type?: 'text' | 'badge' | 'date' | 'action' | 'custom';
  sortable?: boolean;
}

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent {
  @Input() columns: ColumnDef[] = [];
  @Input() data: any[] = [];
  @Input() isLoading: boolean = false;

  // To allow custom templates for specific columns from parent
  @Input() customTemplates: { [key: string]: TemplateRef<any> } = {};
}
