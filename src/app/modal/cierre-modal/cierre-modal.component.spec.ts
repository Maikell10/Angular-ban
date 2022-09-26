import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CierreModalComponent } from './cierre-modal.component';

describe('CierreModalComponent', () => {
  let component: CierreModalComponent;
  let fixture: ComponentFixture<CierreModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CierreModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CierreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
