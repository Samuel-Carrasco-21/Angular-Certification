import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Class22102024Component } from './class-22-10-2024.component';

describe('Class22102024Component', () => {
  let component: Class22102024Component;
  let fixture: ComponentFixture<Class22102024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Class22102024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Class22102024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
