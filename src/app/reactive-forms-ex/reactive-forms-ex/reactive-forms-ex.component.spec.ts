import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsExComponent } from './reactive-forms-ex.component';

describe('ReactiveFormsExComponent', () => {
  let component: ReactiveFormsExComponent;
  let fixture: ComponentFixture<ReactiveFormsExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
