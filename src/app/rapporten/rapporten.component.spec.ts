import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportenComponent } from './rapporten.component';

describe('RapportenComponent', () => {
  let component: RapportenComponent;
  let fixture: ComponentFixture<RapportenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapportenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
