import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CallsComponent } from './pages/calls/calls.component';
import { LocationComponent } from './pages/location/location.component';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { UsersComponent } from './pages/users/users.component';
import { DevicesComponent } from './pages/devices/devices.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { BillingComponent } from './pages/billing/billing.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'calls', component: CallsComponent },
    { path: 'location', component: LocationComponent },
    { path: 'alerts', component: AlertsComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'users', component: UsersComponent },
    { path: 'devices', component: DevicesComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'billing', component: BillingComponent },
    { path: '**', redirectTo: 'dashboard' }
];
