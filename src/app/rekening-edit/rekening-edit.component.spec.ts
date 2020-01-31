import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekeningEditComponent } from './rekening-edit.component';

describe('RekeningEditComponent', () => {
  let component: RekeningEditComponent;
  let fixture: ComponentFixture<RekeningEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekeningEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekeningEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
