import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoorschotListComponent } from './voorschot-list.component';

describe('VoorschotListComponent', () => {
  let component: VoorschotListComponent;
  let fixture: ComponentFixture<VoorschotListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoorschotListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoorschotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
