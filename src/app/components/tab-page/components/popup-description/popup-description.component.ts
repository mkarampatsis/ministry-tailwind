import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup-description',
  standalone: true,
  imports: [],
  templateUrl: './popup-description.component.html',
  styleUrl: './popup-description.component.css'
})
export class PopupDescriptionComponent {
  @Input() public data: any;
 
  constructor(
    public activeModal: NgbActiveModal
  ) { }

  passBack() {
    this.activeModal.close();
  }
}
