import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationExecutiveComponent } from './operation-executive.component';

describe('OperationExecutiveComponent', () => {
  let component: OperationExecutiveComponent;
  let fixture: ComponentFixture<OperationExecutiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationExecutiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationExecutiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
