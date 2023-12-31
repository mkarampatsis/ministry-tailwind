import { Injectable, inject, signal } from '@angular/core';
import { BackendService } from './backend.service';
import { map, tap } from "rxjs";

// import { Organization } from '@ministry/interfaces';
import { Store } from '@ngrx/store';
import { AppState, getOrganizations } from '@ministry/state';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  
  store = inject(Store<AppState>);
  backendService = inject(BackendService);
  ouCodes$ = signal<string[] | []>([]);
  // ouCodes!: string[];

  organizations$ = this.store.select(getOrganizations);

  getOrganizations() {
    return this.backendService.getOrganizations();
  }

  // // Get ouCodes
  // getOUCodes() {
  //   return this.ouCodes;
  // }

  // Set ouCodes
  setOUCodes(codes: string[]) {
    this.ouCodes$.set(codes)
    // this.ouCodes = codes
    // console.log("Units>>",this.ouCodes$());
  }
}
