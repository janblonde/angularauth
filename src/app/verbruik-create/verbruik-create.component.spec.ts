import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbruikCreateComponent } from './verbruik-create.component';

describe('VerbruikCreateComponent', () => {
  let component: VerbruikCreateComponent;
  let fixture: ComponentFixture<VerbruikCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerbruikCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbruikCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
