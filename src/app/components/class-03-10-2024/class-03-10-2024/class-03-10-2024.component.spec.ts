import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Class03102024Component } from './class-03-10-2024.component';

describe('Class03102024Component', () => {
  let component: Class03102024Component;
  let fixture: ComponentFixture<Class03102024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Class03102024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Class03102024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
