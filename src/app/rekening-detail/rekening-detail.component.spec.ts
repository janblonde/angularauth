import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekeningDetailComponent } from './rekening-detail.component';

describe('RekeningDetailComponent', () => {
  let component: RekeningDetailComponent;
  let fixture: ComponentFixture<RekeningDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekeningDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekeningDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
