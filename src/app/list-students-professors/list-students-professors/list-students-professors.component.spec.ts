import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudentsProfessorsComponent } from './list-students-professors.component';

describe('ListStudentsProfessorsComponent', () => {
  let component: ListStudentsProfessorsComponent;
  let fixture: ComponentFixture<ListStudentsProfessorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListStudentsProfessorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStudentsProfessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
