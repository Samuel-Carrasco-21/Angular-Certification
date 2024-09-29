import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoIndicatorComponent } from './info-indicator.component';

describe('InfoIndicatorComponent', () => {
  let component: InfoIndicatorComponent;
  let fixture: ComponentFixture<InfoIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoIndicatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
