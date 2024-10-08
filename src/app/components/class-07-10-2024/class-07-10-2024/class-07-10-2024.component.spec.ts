import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Class07102024Component } from './class-07-10-2024.component';

describe('Class07102024Component', () => {
  let component: Class07102024Component;
  let fixture: ComponentFixture<Class07102024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Class07102024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Class07102024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
