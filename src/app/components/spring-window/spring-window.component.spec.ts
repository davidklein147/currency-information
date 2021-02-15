import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringWindowComponent } from './spring-window.component';

describe('SpringWindowComponent', () => {
  let component: SpringWindowComponent;
  let fixture: ComponentFixture<SpringWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
