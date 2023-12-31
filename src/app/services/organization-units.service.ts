import { Injectable, signal } from '@angular/core';
import { BackendService } from './backend.service';
import { map, tap } from "rxjs";

import { inject } from '@angular/core';
// import { Organization } from '@ministry/interfaces';
import { Store } from '@ngrx/store';
import { AppState, getOrganizationUnits, getOrganizationUnitsByCode } from '@ministry/state';

import { OrganizationService } from '@ministry/services';

@Injectable({
  providedIn: 'root'
})
export class OrganizationUnitsService {
  
  store = inject(Store<AppState>);
  backendService = inject(BackendService);
  organizationService = inject(OrganizationService);
  
  codes$ = this.organizationService.ouCodes$();
  
  organizations_units$ = this.store.select(getOrganizationUnits);
  
  getOrganizationsCodeByCode(codes: string[]){
    // console.log("1>>>", codes);
    let x = this.store.select(getOrganizationUnitsByCode(codes));
    // x.subscribe(data => console.log("x", data));
    return x;
  }
  
  getOrganizationUnits() {
    return this.backendService.getOrganizationUnits();
  }
}
