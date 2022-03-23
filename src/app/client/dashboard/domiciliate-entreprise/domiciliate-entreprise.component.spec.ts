import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomiciliateEntrepriseComponent } from './domiciliate-entreprise.component';

describe('DomiciliateEntrepriseComponent', () => {
  let component: DomiciliateEntrepriseComponent;
  let fixture: ComponentFixture<DomiciliateEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomiciliateEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomiciliateEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
