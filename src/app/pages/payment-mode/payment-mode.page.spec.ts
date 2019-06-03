import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentModePage } from './payment-mode.page';

describe('PaymentModePage', () => {
  let component: PaymentModePage;
  let fixture: ComponentFixture<PaymentModePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentModePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentModePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
