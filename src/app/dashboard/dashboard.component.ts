import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddTransactionComponent } from '../dialog-add-transaction/dialog-add-transaction.component';
import { Firestore, collection, onSnapshot } from '@angular/fire/firestore';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  currentBalance!: number;
  totalIncome: any[] = [];
  allTransactions: any[] = [];

  constructor(
    private dialog: MatDialog,
    private firestore: Firestore
  ) {  }


  // getAllTransactions() {
  //   const collectionRef = collection(this.firestore, 'transactions');
  //   onSnapshot(collectionRef, async (snapshot) => {
  //     let changes = snapshot.docs.map(doc => ({ costId: doc.id, ...doc.data() }));
  //     this.allTransactions = changes;
  //     this.getIncome();
  //     this.formattDate();
  //   });
  // }


  // getIncome() {
  //   this.totalIncome = this.allTransactions.map(transaction => {
  //     return {
  //       amount: transaction.amount,
  //       date: transaction.date,
  //       paymentMethod: transaction.paymentMethod
  //     };
  //   });
  //   console.log(this.totalIncome);
  // }


  // formattDate() {
  //   this.totalIncome.forEach(income => {
  //     let timestamp = income.date.seconds;
  //     let date = new Date(timestamp * 1000);
  //     let day = date.getDate();
  //     let month = date.getMonth() + 1;
  //     let year = date.getFullYear();
  //     let formattedDay = day < 10 ? '0' + day : day;
  //     let formattedMonth = month < 10 ? '0' + month : month;
  //     let formattedDate = formattedDay + '.' + formattedMonth + '.' + year;
  //     income.date = formattedDate;
  //   });
  // }


  getAllTimeBalance() {
    // Die gesamten Einkommen - die Gesamten Ausgaben
  }


  monthlyCashFlow() {
    // Einnahmen und Ausgaben für den aktuellen Monat
  }


  getCurrentMonthlyBudget() {
    // Die Einnahmen vom aktuellen Monat - die Ausgaben und die geplanten Ausgaben für den aktuellen Monat
  }


  lastTransactions() {
    // Get the 3-4 last transactions
  }


  upcomingBills() {
    // Die noch offenen transaktionen Ausgaben - geplant
  }


  openAddDebtDialog() {
    const dialog = this.dialog.open(DialogAddTransactionComponent);
    // dialog.componentInstance.user = new User(this.user.toJson());
    // dialog.componentInstance.userId = this.userId;
  }

}
