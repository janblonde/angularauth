import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportInkomstenuitgavenComponent } from './rapport-inkomstenuitgaven.component';

describe('RapportInkomstenuitgavenComponent', () => {
  let component: RapportInkomstenuitgavenComponent;
  let fixture: ComponentFixture<RapportInkomstenuitgavenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapportInkomstenuitgavenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportInkomstenuitgavenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
