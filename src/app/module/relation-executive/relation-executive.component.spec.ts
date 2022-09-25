import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationExecutiveComponent } from './relation-executive.component';

describe('RelationExecutiveComponent', () => {
  let component: RelationExecutiveComponent;
  let fixture: ComponentFixture<RelationExecutiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelationExecutiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationExecutiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
