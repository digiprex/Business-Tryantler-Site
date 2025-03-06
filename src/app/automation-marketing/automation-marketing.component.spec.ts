import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationMarketingComponent } from './automation-marketing.component';

describe('AutomationMarketingComponent', () => {
  let component: AutomationMarketingComponent;
  let fixture: ComponentFixture<AutomationMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomationMarketingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomationMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
