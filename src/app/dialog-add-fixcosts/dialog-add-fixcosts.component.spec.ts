import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddFixcostsComponent } from './dialog-add-fixcosts.component';

describe('DialogAddFixcostsComponent', () => {
  let component: DialogAddFixcostsComponent;
  let fixture: ComponentFixture<DialogAddFixcostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddFixcostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddFixcostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
