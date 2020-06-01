import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KostentypeCreateComponent } from './kostentype-create.component';

describe('KostentypeCreateComponent', () => {
  let component: KostentypeCreateComponent;
  let fixture: ComponentFixture<KostentypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KostentypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KostentypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
