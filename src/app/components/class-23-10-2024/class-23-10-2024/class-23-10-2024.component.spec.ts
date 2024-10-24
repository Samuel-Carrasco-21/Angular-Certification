import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Class23102024Component } from './class-23-10-2024.component';

describe('Class23102024Component', () => {
  let component: Class23102024Component;
  let fixture: ComponentFixture<Class23102024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Class23102024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Class23102024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
