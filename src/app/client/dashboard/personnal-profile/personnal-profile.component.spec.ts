import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnalProfileComponent } from './personnal-profile.component';

describe('PersonnalProfileComponent', () => {
  let component: PersonnalProfileComponent;
  let fixture: ComponentFixture<PersonnalProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnalProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
