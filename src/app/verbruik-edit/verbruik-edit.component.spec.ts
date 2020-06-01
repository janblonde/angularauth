import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbruikEditComponent } from './verbruik-edit.component';

describe('VerbruikEditComponent', () => {
  let component: VerbruikEditComponent;
  let fixture: ComponentFixture<VerbruikEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerbruikEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbruikEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
