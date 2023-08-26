import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddDebtComponent } from './dialog-add-debt.component';

describe('DialogAddDebtComponent', () => {
  let component: DialogAddDebtComponent;
  let fixture: ComponentFixture<DialogAddDebtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddDebtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddDebtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
