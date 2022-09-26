import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasDetalladoModalComponent } from './ventas-detallado-modal.component';

describe('VentasDetalladoModalComponent', () => {
  let component: VentasDetalladoModalComponent;
  let fixture: ComponentFixture<VentasDetalladoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasDetalladoModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasDetalladoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
