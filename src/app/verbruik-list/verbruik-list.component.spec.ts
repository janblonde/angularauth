import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbruikListComponent } from './verbruik-list.component';

describe('VerbruikListComponent', () => {
  let component: VerbruikListComponent;
  let fixture: ComponentFixture<VerbruikListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerbruikListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbruikListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
