import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawComponent } from './law.component';

describe('LawComponent', () => {
  let component: LawComponent;
  let fixture: ComponentFixture<LawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LawComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
