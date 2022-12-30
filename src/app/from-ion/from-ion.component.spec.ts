import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromIONComponent } from './from-ion.component';

describe('FromIONComponent', () => {
  let component: FromIONComponent;
  let fixture: ComponentFixture<FromIONComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromIONComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromIONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
