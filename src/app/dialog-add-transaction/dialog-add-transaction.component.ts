import { Component } from '@angular/core';
import { Firestore, addDoc, collection, getDoc } from '@angular/fire/firestore';
import { Transaction } from 'src/models/transaction.class';


@Component({
  selector: 'app-dialog-add-transaction',
  templateUrl: './dialog-add-transaction.component.html',
  styleUrls: ['./dialog-add-transaction.component.scss']
})
export class DialogAddTransactionComponent {

  transaction: Transaction = new Transaction();

  constructor(private firestore: Firestore) {
    console.log(this.transaction);
  }

  async addTransaction() {
    const transactionsCollection = collection(this.firestore, 'transactions');
    addDoc(transactionsCollection, this.transaction.toJson()).then(async (result) => {
      const docSnap = await getDoc(result);
    });
  }

}