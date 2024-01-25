import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupContactComponent } from './popup-contact.component';

describe('PopupContactComponent', () => {
  let component: PopupContactComponent;
  let fixture: ComponentFixture<PopupContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopupContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
