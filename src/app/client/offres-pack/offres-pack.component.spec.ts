import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresPackComponent } from './offres-pack.component';

describe('OffresPackComponent', () => {
  let component: OffresPackComponent;
  let fixture: ComponentFixture<OffresPackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffresPackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffresPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
