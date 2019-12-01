import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportIndividuelerekeningenComponent } from './rapport-individuelerekeningen.component';

describe('RapportIndividuelerekeningenComponent', () => {
  let component: RapportIndividuelerekeningenComponent;
  let fixture: ComponentFixture<RapportIndividuelerekeningenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapportIndividuelerekeningenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportIndividuelerekeningenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
