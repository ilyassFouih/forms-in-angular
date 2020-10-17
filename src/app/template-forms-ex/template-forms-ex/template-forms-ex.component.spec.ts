import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormsExComponent } from './template-forms-ex.component';

describe('TemplateFormsExComponent', () => {
  let component: TemplateFormsExComponent;
  let fixture: ComponentFixture<TemplateFormsExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateFormsExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormsExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
