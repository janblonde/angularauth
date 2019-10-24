import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactuurCreateComponent } from './factuur-create.component';

describe('FactuurCreateComponent', () => {
  let component: FactuurCreateComponent;
  let fixture: ComponentFixture<FactuurCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactuurCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactuurCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
