import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasDetalladoModalComponent } from './compras-detallado-modal.component';

describe('ComprasDetalladoModalComponent', () => {
  let component: ComprasDetalladoModalComponent;
  let fixture: ComponentFixture<ComprasDetalladoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprasDetalladoModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprasDetalladoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
