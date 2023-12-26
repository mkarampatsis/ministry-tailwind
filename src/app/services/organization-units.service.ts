import { Injectable, signal } from '@angular/core';
import { BackendService } from './backend.service';
import { map, tap } from "rxjs";

import { inject } from '@angular/core';
// import { Organization } from '@ministry/interfaces';
import { Store } from '@ngrx/store';
import { AppState, getOrganizationUnits } from '@ministry/state';

@Injectable({
  providedIn: 'root'
})
export class OrganizationUnitsService {
  
  store = inject(Store<AppState>);
  backendService = inject(BackendService);
  ouCodes$ = signal<string[]>([]);

  organizations_units$ = this.store.select(getOrganizationUnits);

  getOrganizationUnits() {
    return this.backendService.getOrganizationUnits();
  }

  // Get the signal
  getOUCodes() {
    return this.ouCodes$;
  }

  // Set the signal
  setOUCodes(codes: string[]) {
    this.ouCodes$.set(codes)
  }
}
