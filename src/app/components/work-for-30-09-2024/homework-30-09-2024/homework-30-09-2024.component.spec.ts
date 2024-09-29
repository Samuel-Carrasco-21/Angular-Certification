import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework30092024Component } from './homework-30-09-2024.component';

describe('Homework30092024Component', () => {
  let component: Homework30092024Component;
  let fixture: ComponentFixture<Homework30092024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homework30092024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homework30092024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
