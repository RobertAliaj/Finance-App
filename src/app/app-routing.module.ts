import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SavingsComponent } from './savings/savings.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { DialogAddTransactionComponent } from './dialog-add-transaction/dialog-add-transaction.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'transaction', component: DialogAddTransactionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
