import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Class16102024Component } from './class-16-10-2024.component';

describe('Class16102024Component', () => {
  let component: Class16102024Component;
  let fixture: ComponentFixture<Class16102024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Class16102024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Class16102024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
