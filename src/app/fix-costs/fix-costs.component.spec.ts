import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixCostsComponent } from './fix-costs.component';

describe('FixCostsComponent', () => {
  let component: FixCostsComponent;
  let fixture: ComponentFixture<FixCostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixCostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
