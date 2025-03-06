import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroCommissionDeliveryComponent } from './zero-commission-delivery.component';

describe('ZeroCommissionDeliveryComponent', () => {
  let component: ZeroCommissionDeliveryComponent;
  let fixture: ComponentFixture<ZeroCommissionDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZeroCommissionDeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZeroCommissionDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
