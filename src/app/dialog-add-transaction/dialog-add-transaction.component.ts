import { Component } from '@angular/core';
import { Firestore, addDoc, collection, getDoc } from '@angular/fire/firestore';
import { Transaction } from 'src/models/transaction.class';
import { Newtransaction } from 'src/models/transactions-new.class';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionServiceService } from '../transaction-service.service';

@Component({
  selector: 'app-dialog-add-transaction',
  templateUrl: './dialog-add-transaction.component.html',
  styleUrls: ['./dialog-add-transaction.component.scss']
})
export class DialogAddTransactionComponent {

  transactionForm!: FormGroup;
  transaction: Transaction = new Transaction();

  constructor(private firestore: Firestore, private fb: FormBuilder, private transactionService: TransactionServiceService) {
    this.transactionForm = this.fb.group({
      transactionType: ['', Validators.required],
      incomeType: [''],
      costType: [''],
      investmentType: [''],
      creditorName: [''],
      amount: ['', [Validators.required, Validators.min(5)]],
      paymentMethod: [''],
      description: ['', Validators.required],
      date: [new Date(), Validators.required]
    });
  }

  getValuesFromInputs() {
    this.transaction.transactionType = this.transactionForm.get('transactionType')?.value;
    this.transaction.incomeType = this.transactionForm.get('incomeType')?.value;
    this.transaction.costType = this.transactionForm.get('costType')?.value;
    this.transaction.investmentType = this.transactionForm.get('investmentType')?.value;
    this.transaction.creditorName = this.transactionForm.get('creditorName')?.value;
    this.transaction.amount = this.transactionForm.get('amount')?.value;
    this.transaction.paymentMethod = this.transactionForm.get('paymentMethod')?.value;
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
