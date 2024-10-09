import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Class08102024Component } from './class-08-10-2024.component';

describe('Class08102024Component', () => {
  let component: Class08102024Component;
  let fixture: ComponentFixture<Class08102024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Class08102024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Class08102024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
