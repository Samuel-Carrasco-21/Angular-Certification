import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Class11102024Component } from './class-11-10-2024.component';

describe('Class11102024Component', () => {
  let component: Class11102024Component;
  let fixture: ComponentFixture<Class11102024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Class11102024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Class11102024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
