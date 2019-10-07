import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EigenaarCreateComponent } from './eigenaar-create.component';

describe('EigenaarCreateComponent', () => {
  let component: EigenaarCreateComponent;
  let fixture: ComponentFixture<EigenaarCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EigenaarCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EigenaarCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
