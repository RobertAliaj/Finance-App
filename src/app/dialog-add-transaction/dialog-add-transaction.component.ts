import { Component } from '@angular/core';
import { Firestore, addDoc, collection, getDoc } from '@angular/fire/firestore';
import { Transaction } from 'src/models/transaction.class';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-dialog-add-transaction',
  templateUrl: './dialog-add-transaction.component.html',
  styleUrls: ['./dialog-add-transaction.component.scss']
})
export class DialogAddTransactionComponent {

  transactionForm!: FormGroup;
  transaction: Transaction = new Transaction();

  constructor(private firestore: Firestore, private fb: FormBuilder) {
    this.transactionForm = this.fb.group({
      transactionType: ['Income', Validators.required],
      amount: ['', [Validators.required, Validators.min(5)]],
      description: ['', Validators.required],
      date: [new Date(), Validators.required]
    });
  }


  getValuesFromInputs() {
    this.transaction.transactionType = this.transactionForm.get('transactionType')?.value;
    this.transaction.amount = this.transactionForm.get('amount')?.value;
    this.transaction.description = this.transactionForm.get('description')?.value;
    this.transaction.date = this.transactionForm.get('date')?.value;
  }


  async addTransaction() {
    this.getValuesFromInputs();
    const transactionsCollection = collection(this.firestore, 'transactions');
    addDoc(transactionsCollection, this.transaction.toJson()).then(async (result) => {
      const docSnap = await getDoc(result);
    });
  }

}