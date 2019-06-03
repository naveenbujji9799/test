import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseListingComponent } from './showcase-listing.component';

describe('ShowcaseListingComponent', () => {
  let component: ShowcaseListingComponent;
  let fixture: ComponentFixture<ShowcaseListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaseListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
