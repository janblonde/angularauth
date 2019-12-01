import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportBalansComponent } from './rapport-balans.component';

describe('RapportBalansComponent', () => {
  let component: RapportBalansComponent;
  let fixture: ComponentFixture<RapportBalansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapportBalansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportBalansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
