import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeparmentComponent } from './product-deparment.component';

describe('ProductDeparmentComponent', () => {
  let component: ProductDeparmentComponent;
  let fixture: ComponentFixture<ProductDeparmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDeparmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDeparmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
