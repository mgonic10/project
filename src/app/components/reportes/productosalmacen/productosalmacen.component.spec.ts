import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosalmacenComponent } from './productosalmacen.component';

describe('ProductosalmacenComponent', () => {
  let component: ProductosalmacenComponent;
  let fixture: ComponentFixture<ProductosalmacenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosalmacenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosalmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
