import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  currentBalance!: number;

  constructor(){}


  getAllTimeBalance(){
    // Die gesamten Einkommen - die Gesamten Ausgaben
  }


  monthlyCashFlow(){
    // Einnahmen und Ausgaben für den aktuellen Monat
  }


  getCurrentMonthlyBudget(){
    // Die Einnahmen vom aktuellen Monat - die Ausgaben und die geplanten Ausgaben für den aktuellen Monat
  }


  lastTransactions(){
    // Get the 3-4 last transactions
  }


  upcomingBills(){
    // Die noch offenen transaktionen Ausgaben - geplant
  }


  addTransaction(){

  }


  // Man macht die App auf und wird dann aufgefordert die Einnahmen von dem Monat in dem man sich befindet einzugeben. 
  // Dann kann auch selber aussuchen ob man auch noch seine Ausgaben eingeben möchte
}
