import { Component } from '@angular/core';
import { TransactionService } from '../transaction-service.service';

@Component({
  selector: 'app-income-history',
  templateUrl: './income-history.component.html',
  styleUrls: ['./income-history.component.scss']
})
export class IncomeHistoryComponent {

  totalIncome!: number;
  incomeActualMonth!: number;
  allIncomeTransactions: any[] = [];

  constructor(private transactionService: TransactionService) { }


  ngOnInit() {
    this.transactionService.getAllTransactions('Cost', (changes: any) => {
      this.allIncomeTransactions = changes;
      this.getTotalIncome();
      this.formattDate();
      this.getIncomeForActualMonth();
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


  getTotalIncome() {
    this.totalIncome = this.allIncomeTransactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  }


  formattDate() {
    this.allIncomeTransactions.forEach(income => {
      let timestamp = income.date.seconds;
      let date = new Date(timestamp * 1000);
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let formattedDay = day < 10 ? '0' + day : day;
      let formattedMonth = month < 10 ? '0' + month : month;
      let formattedDate = formattedDay + '.' + formattedMonth + '.' + year;
      income.date = formattedDate;
    });
  }


  getIncomeForActualMonth() {
    const actualMonthIncome = this.allIncomeTransactions.filter(income => {

      let today = new Date();
      let yyyy = today.getFullYear();
      let mm: any = today.getMonth() + 1;
      let dd: any = today.getDate();

      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;

      const [incomeDay, incomeMonth, incomeYear] = income.date.split(".");

      return incomeMonth === `${mm}` && incomeYear === `${yyyy}`;
    });

    this.incomeActualMonth = actualMonthIncome.reduce((acc, income) => acc + income.amount, 0);
    console.log(this.incomeActualMonth);
  }


}
