import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InyecAbsModalComponent } from './inyec-abs-modal.component';

describe('InyecAbsModalComponent', () => {
  let component: InyecAbsModalComponent;
  let fixture: ComponentFixture<InyecAbsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InyecAbsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InyecAbsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
