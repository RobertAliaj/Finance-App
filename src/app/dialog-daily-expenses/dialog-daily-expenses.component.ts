import { Component } from '@angular/core';
import { Firestore, addDoc, collection, getDoc } from '@angular/fire/firestore';
import { Expenses } from 'src/models/expenses.class';


@Component({
  selector: 'app-dialog-daily-expenses',
  templateUrl: './dialog-daily-expenses.component.html',
  styleUrls: ['./dialog-daily-expenses.component.scss']
})
export class DialogDailyExpensesComponent {


  expenses: Expenses = new Expenses();


  constructor(private firestore: Firestore){
    console.log(this.expenses);
  }



  async addTransaction() {
    const transactionsCollection = collection(this.firestore, 'transactions');
    // addDoc(transactionsCollection, this.transaction.toJson()).then(async (result) => {
      // const docSnap = await getDoc(result);
    // });
  }

}
