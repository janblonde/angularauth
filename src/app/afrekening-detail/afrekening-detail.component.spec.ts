import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfrekeningDetailComponent } from './afrekening-detail.component';

describe('AfrekeningDetailComponent', () => {
  let component: AfrekeningDetailComponent;
  let fixture: ComponentFixture<AfrekeningDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfrekeningDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfrekeningDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
