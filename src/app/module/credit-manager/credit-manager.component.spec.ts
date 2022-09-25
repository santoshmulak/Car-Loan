import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditManagerComponent } from './credit-manager.component';

describe('CreditManagerComponent', () => {
  let component: CreditManagerComponent;
  let fixture: ComponentFixture<CreditManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
