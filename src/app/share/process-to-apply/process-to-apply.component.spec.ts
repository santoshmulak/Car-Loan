import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessToApplyComponent } from './process-to-apply.component';

describe('ProcessToApplyComponent', () => {
  let component: ProcessToApplyComponent;
  let fixture: ComponentFixture<ProcessToApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessToApplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessToApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
