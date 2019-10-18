import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekeningListComponent } from './rekening-list.component';

describe('RekeningListComponent', () => {
  let component: RekeningListComponent;
  let fixture: ComponentFixture<RekeningListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekeningListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekeningListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
