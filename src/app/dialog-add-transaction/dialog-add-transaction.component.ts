import { Component } from '@angular/core';
import { Firestore, addDoc, collection, getDoc } from '@angular/fire/firestore';
import { Transaction } from 'src/models/transaction.class';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionServiceService } from '../transaction-service.service';

import { Income } from 'src/models/income.class';
import { Debt } from 'src/models/debt.class';
import { Investment } from 'src/models/investment.class';
import { VariableCosts } from 'src/models/variable-costs.class';
import { Savings } from 'src/models/savings.class';

@Component({
  selector: 'app-dialog-add-transaction',
  templateUrl: './dialog-add-transaction.component.html',
  styleUrls: ['./dialog-add-transaction.component.scss']
})

export class DialogAddTransactionComponent {

  transactionForm!: FormGroup;
  transaction: Transaction = new Transaction();

  income: Income = new Income();
  debt: Debt = new Debt();
  investment: Investment = new Investment();
  variableCosts: VariableCosts = new VariableCosts();
  savings: Savings = new Savings();


  private transactionTypeMap: { [key: string]: Income | Debt | Investment | VariableCosts | Savings } = {
    'Income': this.income,
    'Debt': this.debt,
    'Invest': this.investment,
    'Cost': this.variableCosts,
    'Savings': this.savings
  };

  constructor(private firestore: Firestore, private fb: FormBuilder, private transactionService: TransactionServiceService) {
    this.initForm();
  }


  initForm() {
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


  async addNewTransaction() {
    this.getValuesFromInputs();

    const transaction = this.transactionTypeMap[this.transaction.transactionType];

    if (transaction) {
      this.setValuesForType(transaction);
      console.log(transaction.customToJson());
      const transactionsCollection = collection(this.firestore, 'transactions');
      await addDoc(transactionsCollection, transaction.customToJson());
    }
  }


  getValuesFromInputs() {
    this.transaction = this.transactionForm.value;
  }


  setValuesForType(target: any) {
    const fields = Object.keys(target);
    for (const field of fields) {
      if (this.transaction.hasOwnProperty(field)) {
        (target as any)[field] = (this.transaction as any)[field];
      }
    }
  }

}