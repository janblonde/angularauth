import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KostentypeListComponent } from './kostentype-list.component';

describe('KostentypeListComponent', () => {
  let component: KostentypeListComponent;
  let fixture: ComponentFixture<KostentypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KostentypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KostentypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
