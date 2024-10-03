import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Class02102024Component } from './class-02-10-2024.component';

describe('Class02102024Component', () => {
  let component: Class02102024Component;
  let fixture: ComponentFixture<Class02102024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Class02102024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Class02102024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
