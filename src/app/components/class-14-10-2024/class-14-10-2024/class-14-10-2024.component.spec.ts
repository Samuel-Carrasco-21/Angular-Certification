import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Class14102024Component } from './class-14-10-2024.component';

describe('Class14102024Component', () => {
  let component: Class14102024Component;
  let fixture: ComponentFixture<Class14102024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Class14102024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Class14102024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
