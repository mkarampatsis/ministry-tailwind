import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDescriptionComponent } from './popup-description.component';

describe('PopupDescriptionComponent', () => {
  let component: PopupDescriptionComponent;
  let fixture: ComponentFixture<PopupDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopupDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
