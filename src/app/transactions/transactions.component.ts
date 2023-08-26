import { Component } from '@angular/core';
import { Firestore, addDoc, collection, getDoc } from '@angular/fire/firestore';
import { Transaction } from 'src/models/transaction.class';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {

  expenses: Transaction = new Transaction();


  constructor(private firestore: Firestore){
    console.log(this.expenses);
  }



  async addTransaction() {
    const transactionsCollection = collection(this.firestore, 'transactions');
    addDoc(transactionsCollection, this.expenses.toJson()).then(async (result) => {
      const docSnap = await getDoc(result);
    });
  }

}
