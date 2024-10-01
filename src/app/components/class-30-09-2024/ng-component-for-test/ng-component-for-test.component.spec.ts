import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgComponentForTestComponent } from './ng-component-for-test.component';

describe('NgComponentForTestComponent', () => {
  let component: NgComponentForTestComponent;
  let fixture: ComponentFixture<NgComponentForTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgComponentForTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgComponentForTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
