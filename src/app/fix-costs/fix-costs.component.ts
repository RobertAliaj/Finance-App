import { Component } from '@angular/core';
import { Firestore, collection, onSnapshot } from '@angular/fire/firestore';
import { DialogAddFixcostsComponent } from '../dialog-add-fixcosts/dialog-add-fixcosts.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-fix-costs',
  templateUrl: './fix-costs.component.html',
  styleUrls: ['./fix-costs.component.scss']
})
export class FixCostsComponent {

  allFixCosts: any[] = [];

  constructor(private firestore: Firestore, private dialog: MatDialog) {
    this.getFixCosts();
  }


  getFixCosts() {
    const collectionRef = collection(this.firestore, 'fixCosts');
    onSnapshot(collectionRef, async (snapshot) => {
      let changes = snapshot.docs.map(doc => ({ costId: doc.id, ...doc.data() }));
      this.allFixCosts = changes;
      this.formattDate();
      // this.allTransactions.sort((a, b) => b.timeStamp - a.timeStamp);
      // this.filteredTransactions = this.allTransactions;
      // this.highlightNewTransactions();
    });
  }


  formattDate() {
    this.allFixCosts.forEach(cost => {
      let timestamp = cost.date.seconds;
      let date = new Date(timestamp * 1000);
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let formattedDay = day < 10 ? '0' + day : day;
      let formattedMonth = month < 10 ? '0' + month : month;
      let formattedDate = formattedDay + '.' + formattedMonth + '.' + year;
      cost.date = formattedDate;
    });
  }


  openAddDFixCostDialog() {
    const dialog = this.dialog.open(DialogAddFixcostsComponent);
  }


  changeFixCosts() { }
}
