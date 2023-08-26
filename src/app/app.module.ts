import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MainComponent } from './main/main.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SavingsComponent } from './savings/savings.component';
import {MatCardModule} from '@angular/material/card';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { TransactionsComponent } from './transactions/transactions.component';
import { FixCostsComponent } from './fix-costs/fix-costs.component';
import { DialogAddTransactionComponent } from './dialog-add-transaction/dialog-add-transaction.component';
import { DialogAddDebtComponent } from './dialog-add-debt/dialog-add-debt.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MainComponent,
    SavingsComponent,
    TransactionsComponent,
    FixCostsComponent,
    DialogAddTransactionComponent,
    DialogAddDebtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
