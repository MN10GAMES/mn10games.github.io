import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalickComponent } from './malick.component';

describe('MalickComponent', () => {
  let component: MalickComponent;
  let fixture: ComponentFixture<MalickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MalickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MalickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
