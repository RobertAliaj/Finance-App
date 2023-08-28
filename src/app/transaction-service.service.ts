import { Injectable } from '@angular/core';
import { Newtransaction } from '../models/transactions-new.class';
import { Firestore, addDoc, collection, getDoc } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {

  constructor(private firestore: Firestore) { }
}
