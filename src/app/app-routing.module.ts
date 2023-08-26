import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SavingsComponent } from './savings/savings.component';
import { DialogDailyExpensesComponent } from './dialog-daily-expenses/dialog-daily-expenses.component';

const routes: Routes = [
  { path: '', component: DialogDailyExpensesComponent },
  { path: 'savings', component: SavingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
