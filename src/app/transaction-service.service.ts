import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.class';
import { Firestore, addDoc, collection, getDoc } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {

  transaction: Transaction = new Transaction();

  constructor(private firestore: Firestore) { }

  addTransaction(transaction: any){
    const transactionsCollection = collection(this.firestore, 'transactions');
    addDoc(transactionsCollection, transaction.toJson()).then(async (result) => {
      const docSnap = await getDoc(result);
    });
  }
}