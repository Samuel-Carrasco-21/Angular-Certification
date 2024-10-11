import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Class10102024Component } from './class-10-10-2024.component';

describe('Class10102024Component', () => {
  let component: Class10102024Component;
  let fixture: ComponentFixture<Class10102024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Class10102024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Class10102024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
