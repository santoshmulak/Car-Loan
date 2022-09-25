import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewDealerComponent } from './admin-view-dealer.component';

describe('AdminViewDealerComponent', () => {
  let component: AdminViewDealerComponent;
  let fixture: ComponentFixture<AdminViewDealerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewDealerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewDealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
