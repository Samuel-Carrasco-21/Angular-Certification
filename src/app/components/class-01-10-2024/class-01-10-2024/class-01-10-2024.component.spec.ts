import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Class01102024Component } from './class-01-10-2024.component';

describe('Class01102024Component', () => {
  let component: Class01102024Component;
  let fixture: ComponentFixture<Class01102024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Class01102024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Class01102024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
