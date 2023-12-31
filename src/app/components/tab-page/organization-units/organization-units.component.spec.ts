import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationUnitsComponent } from './organization-units.component';

describe('OrganizationUnitsComponent', () => {
  let component: OrganizationUnitsComponent;
  let fixture: ComponentFixture<OrganizationUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizationUnitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizationUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
