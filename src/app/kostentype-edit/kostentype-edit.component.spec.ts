import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KostentypeEditComponent } from './kostentype-edit.component';

describe('KostentypeEditComponent', () => {
  let component: KostentypeEditComponent;
  let fixture: ComponentFixture<KostentypeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KostentypeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KostentypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
