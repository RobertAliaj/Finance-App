import { Component } from '@angular/core';
import { Firestore, addDoc, collection, getDoc } from '@angular/fire/firestore';
import { Debt } from 'src/models/debt.class';


@Component({
  selector: 'app-dialog-add-debt',
  templateUrl: './dialog-add-debt.component.html',
  styleUrls: ['./dialog-add-debt.component.scss']
})
export class DialogAddDebtComponent {

  debt: Debt = new Debt();

  constructor(private firestore: Firestore) {
    console.log(this.debt);
  }


  async addDebt() {
    const transactionsCollection = collection(this.firestore, 'debt');
    addDoc(transactionsCollection, this.debt.toJson()).then(async (result) => {
      const docSnap = await getDoc(result);
    });
  }
}
