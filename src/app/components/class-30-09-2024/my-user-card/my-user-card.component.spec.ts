import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyUserCardComponent } from './my-user-card.component';

describe('MyUserCardComponent', () => {
  let component: MyUserCardComponent;
  let fixture: ComponentFixture<MyUserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyUserCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
