import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCurComponent } from './one-cur.component';

describe('OneCurComponent', () => {
  let component: OneCurComponent;
  let fixture: ComponentFixture<OneCurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneCurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneCurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
