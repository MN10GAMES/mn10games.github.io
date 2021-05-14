import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavanhikeComponent } from './savanhike.component';

describe('SavanhikeComponent', () => {
  let component: SavanhikeComponent;
  let fixture: ComponentFixture<SavanhikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavanhikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavanhikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
