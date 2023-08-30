import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.class';
import { Firestore, addDoc, query,  collection, getDoc, onSnapshot, where } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  transaction: Transaction = new Transaction();

  constructor(private firestore: Firestore) { }



  getAllTransactions(transactionType: string, callback: Function) {
    const collectionRef = collection(this.firestore, 'transactions');
    const result = query(collectionRef, where("transactionType", "==", transactionType));

    onSnapshot(result, async (snapshot) => {
      let changes = snapshot.docs.map(doc => ({ transactionId: doc.id, ...doc.data() }));
      callback(changes);
    });
  }

  // getAllTransactions() {
  //   const collectionRef = collection(this.firestore, 'transactions');
  //   const result = query(collectionRef, where("transactionType", "==", "Income"));

  //   onSnapshot(result, async (snapshot) => {
  //     let changes = snapshot.docs.map(doc => ({ incomeId: doc.id, ...doc.data() }));
  //     this.allIncomeTransactions = changes;
  //     this.getTotalIncome();
  //     this.formattDate();
  //     this.getIncomeForActualMonth();
  //   });
  // }


  getTransactionsByType(){

  } 

}