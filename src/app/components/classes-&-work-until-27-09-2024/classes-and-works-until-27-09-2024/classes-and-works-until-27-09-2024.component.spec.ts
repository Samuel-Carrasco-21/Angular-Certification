import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesAndWorksUntil27092024Component } from './classes-and-works-until-27-09-2024.component';

describe('ClassesAndWorksUntil27092024Component', () => {
  let component: ClassesAndWorksUntil27092024Component;
  let fixture: ComponentFixture<ClassesAndWorksUntil27092024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassesAndWorksUntil27092024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesAndWorksUntil27092024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
