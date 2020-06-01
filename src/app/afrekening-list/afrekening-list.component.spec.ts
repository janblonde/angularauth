import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfrekeningListComponent } from './afrekening-list.component';

describe('AfrekeningListComponent', () => {
  let component: AfrekeningListComponent;
  let fixture: ComponentFixture<AfrekeningListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfrekeningListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfrekeningListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
