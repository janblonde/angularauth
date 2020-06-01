import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfrekeningCreateComponent } from './afrekening-create.component';

describe('AfrekeningCreateComponent', () => {
  let component: AfrekeningCreateComponent;
  let fixture: ComponentFixture<AfrekeningCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfrekeningCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfrekeningCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
