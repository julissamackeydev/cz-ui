import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcclaimComponent } from './acclaim.component';

describe('AcclaimComponent', () => {
  let component: AcclaimComponent;
  let fixture: ComponentFixture<AcclaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcclaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
