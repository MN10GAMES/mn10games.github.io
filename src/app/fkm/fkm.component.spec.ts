import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FkmComponent } from './fkm.component';

describe('FkmComponent', () => {
  let component: FkmComponent;
  let fixture: ComponentFixture<FkmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FkmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FkmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
