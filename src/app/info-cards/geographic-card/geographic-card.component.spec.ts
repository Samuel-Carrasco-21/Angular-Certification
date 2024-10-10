import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeographicCardComponent } from './geographic-card.component';

describe('GeographicCardComponent', () => {
  let component: GeographicCardComponent;
  let fixture: ComponentFixture<GeographicCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeographicCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeographicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
