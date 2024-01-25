import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { PopupContactComponent } from '../popup-contact/popup-contact.component';
import { PopupDescriptionComponent } from '../popup-description/popup-description.component';

@Component({
  selector: 'app-actions-cell-renderer',
  standalone: true,
  imports: [],
  templateUrl: './actions-cell-renderer.component.html',
  styleUrl: './actions-cell-renderer.component.css'
})
export class ActionsCellRendererComponent implements ICellRendererAngularComp {
  public params!: ICellRendererParams;

  constructor(
    public modalService: NgbModal
  ) { }

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  public showContact() {
    const modalRef = this.modalService.open(PopupContactComponent);
    modalRef.componentInstance.data = {
      contactPoint: this.params.data.contactPoint,
      mainAddress: this.params.data.mainAddress
    }
  }

  public showDescription() {
    const modalRef = this.modalService.open(PopupDescriptionComponent);
    modalRef.componentInstance.data = {
      description: this.params.data.description
    }
  }

  refresh(): boolean {
    return false;
  }
}
