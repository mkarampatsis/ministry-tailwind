import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { map, tap } from "rxjs";

import { inject } from '@angular/core';
// import { Organization } from '@ministry/interfaces';
import { Store } from '@ngrx/store';
import { AppState, getOrganizations } from '@ministry/state';

import { OrganizationUnitsService } from '@ministry/services';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  
  store = inject(Store<AppState>);
  backendService = inject(BackendService);
  oranizationUnitsService = inject(OrganizationUnitsService);

  organizations$ = this.store.select(getOrganizations);

  getOrganizations() {
    return this.backendService.getOrganizations();
  }

  setOUCodes(codes: string[]){
    // console.log(codes);
    this.oranizationUnitsService.setOUCodes(codes);
  }
}
