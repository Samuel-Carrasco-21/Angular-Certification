import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Class17102024Component } from './class-17-10-2024.component';

describe('Class17102024Component', () => {
  let component: Class17102024Component;
  let fixture: ComponentFixture<Class17102024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Class17102024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Class17102024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
