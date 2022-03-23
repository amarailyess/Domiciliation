import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AproposPackComponent } from './apropos-pack.component';

describe('AproposPackComponent', () => {
  let component: AproposPackComponent;
  let fixture: ComponentFixture<AproposPackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AproposPackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AproposPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
