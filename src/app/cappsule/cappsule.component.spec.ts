import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CappsuleComponent } from './cappsule.component';

describe('CappsuleComponent', () => {
  let component: CappsuleComponent;
  let fixture: ComponentFixture<CappsuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CappsuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CappsuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
