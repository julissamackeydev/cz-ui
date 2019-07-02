import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestDetailComponent } from './latest-detail.component';

describe('LatestDetailComponent', () => {
  let component: LatestDetailComponent;
  let fixture: ComponentFixture<LatestDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
