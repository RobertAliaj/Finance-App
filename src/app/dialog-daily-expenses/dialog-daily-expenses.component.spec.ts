import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDailyExpensesComponent } from './dialog-daily-expenses.component';

describe('DialogDailyExpensesComponent', () => {
  let component: DialogDailyExpensesComponent;
  let fixture: ComponentFixture<DialogDailyExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDailyExpensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDailyExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
