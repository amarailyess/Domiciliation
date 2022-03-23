import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeWrapperComponent } from './welcome-wrapper.component';

describe('WelcomeWrapperComponent', () => {
  let component: WelcomeWrapperComponent;
  let fixture: ComponentFixture<WelcomeWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
