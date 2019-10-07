import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EigenaarEditComponent } from './eigenaar-edit.component';

describe('EigenaarEditComponent', () => {
  let component: EigenaarEditComponent;
  let fixture: ComponentFixture<EigenaarEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EigenaarEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EigenaarEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
