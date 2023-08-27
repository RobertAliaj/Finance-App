import { Component } from '@angular/core';
import { Firestore, addDoc, collection, getDoc } from '@angular/fire/firestore';
import { Debt } from 'src/models/debt.class';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-dialog-add-debt',
  templateUrl: './dialog-add-debt.component.html',
  styleUrls: ['./dialog-add-debt.component.scss']
})
export class DialogAddDebtComponent {

  debt: Debt = new Debt();
  debtForm: FormGroup;


  constructor(private fb: FormBuilder, private firestore: Firestore) {
    this.debtForm = this.fb.group({
      toWhom: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      date: [new Date(), Validators.required]
    });
  }


  getValuesFromDebtForm() {
    this.debt.toWhom = this.debtForm.get('toWhom')?.value;
    this.debt.amount = this.debtForm.get('amount')?.value;
    this.debt.description = this.debtForm.get('description')?.value;
    this.debt.date = this.debtForm.get('date')?.value;
  }


  async addDebt() {
    this.getValuesFromDebtForm();
    const transactionsCollection = collection(this.firestore, 'debt');
    addDoc(transactionsCollection, this.debt.toJson()).then(async (result) => {
      const docSnap = await getDoc(result);
    });
  }
}
