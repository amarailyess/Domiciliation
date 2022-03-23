import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPackComponent } from './services-pack.component';

describe('ServicesPackComponent', () => {
  let component: ServicesPackComponent;
  let fixture: ComponentFixture<ServicesPackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesPackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
