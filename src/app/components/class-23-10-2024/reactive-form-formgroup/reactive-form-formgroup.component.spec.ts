import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormFormgroupComponent } from './reactive-form-formgroup.component';

describe('ReactiveFormFormgroupComponent', () => {
  let component: ReactiveFormFormgroupComponent;
  let fixture: ComponentFixture<ReactiveFormFormgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormFormgroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormFormgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
