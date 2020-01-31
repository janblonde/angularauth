import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactuurEditComponent } from './factuur-edit.component';

describe('FactuurEditComponent', () => {
  let component: FactuurEditComponent;
  let fixture: ComponentFixture<FactuurEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactuurEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactuurEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
