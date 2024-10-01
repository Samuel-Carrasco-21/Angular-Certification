import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Class30092024Component } from './class-30-09-2024.component';

describe('Class30092024Component', () => {
  let component: Class30092024Component;
  let fixture: ComponentFixture<Class30092024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Class30092024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Class30092024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
