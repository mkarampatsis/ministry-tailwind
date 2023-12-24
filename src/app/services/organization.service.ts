import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { map, tap } from "rxjs";

import { inject } from '@angular/core';
import { Organization } from '@ministry/interfaces';
import { Store } from '@ngrx/store';
import { AppState, getOrganizations } from '@ministry/state';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  
  store = inject(Store<AppState>);

  constructor(
    private backendService: BackendService
  ) { }


  organizations$ = this.store.select(getOrganizations);

  getOrganizations() {
    return this.backendService.getOrganizations();
  }
}
