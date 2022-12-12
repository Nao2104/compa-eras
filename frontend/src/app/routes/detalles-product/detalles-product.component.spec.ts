import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesProductComponent } from './detalles-product.component';

describe('DetallesProductComponent', () => {
  let component: DetallesProductComponent;
  let fixture: ComponentFixture<DetallesProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
