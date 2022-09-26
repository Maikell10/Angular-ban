import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosModalComponent } from './filtros-modal.component';

describe('FiltrosModalComponent', () => {
  let component: FiltrosModalComponent;
  let fixture: ComponentFixture<FiltrosModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrosModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltrosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
