import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup-contact',
  standalone: true,
  imports: [],
  templateUrl: './popup-contact.component.html',
  styleUrl: './popup-contact.component.css'
})
export class PopupContactComponent {
  
  @Input() public data: any;
 
  constructor(
    public activeModal: NgbActiveModal
  ) { }

  passBack() {
    this.activeModal.close();
  }
}
