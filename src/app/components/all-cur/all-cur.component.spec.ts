import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCurComponent } from './all-cur.component';

describe('AllCurComponent', () => {
  let component: AllCurComponent;
  let fixture: ComponentFixture<AllCurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
