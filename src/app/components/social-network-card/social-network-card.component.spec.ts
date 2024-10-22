import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetworkCardComponent } from './social-network-card.component';

describe('SocialNetworkCardComponent', () => {
  let component: SocialNetworkCardComponent;
  let fixture: ComponentFixture<SocialNetworkCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialNetworkCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialNetworkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
