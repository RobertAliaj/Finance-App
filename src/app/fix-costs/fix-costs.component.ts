import { Component } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FixCosts } from 'src/models/fix-costs.class';


@Component({
  selector: 'app-fix-costs',
  templateUrl: './fix-costs.component.html',
  styleUrls: ['./fix-costs.component.scss']
})
export class FixCostsComponent {

  fixCostsForm!: FormGroup;
  fixCosts: FixCosts = new FixCosts();

  constructor(private fb: FormBuilder, private firestore: Firestore) {
    this.initForm();
  }

  initForm() {
    this.fixCostsForm = this.fb.group({
      name: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1)]],
      date: [new Date(), Validators.required],
      paymentInterval: ['monatlich', Validators.required],
      // autoRenewal: [false]
    });
  }


  getValuesFromInput() {
    this.fixCosts.name = this.fixCostsForm.get('name')?.value;
    this.fixCosts.amount = this.fixCostsForm.get('amount')?.value;
    this.fixCosts.date = this.fixCostsForm.get('date')?.value;
    this.fixCosts.paymentInterval = this.fixCostsForm.get('paymentInterval')?.value;
  }


  async addFixCosts() {
    this.getValuesFromInput();
    console.log(this.fixCosts.toJson());
    const fixCostsCollection = collection(this.firestore, 'fixCosts');
    await addDoc(fixCostsCollection, this.fixCosts.toJson());
  }


  changeFixCosts() {

  }


}
