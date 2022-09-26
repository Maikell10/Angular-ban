import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrosModalComponent } from './parametros-modal.component';

describe('ParametrosModalComponent', () => {
  let component: ParametrosModalComponent;
  let fixture: ComponentFixture<ParametrosModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametrosModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametrosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
