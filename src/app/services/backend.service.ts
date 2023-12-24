import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Organization } from '../interfaces';
import { OrganizationUnits } from '../interfaces';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(
    private http: HttpClient,
  ) { }

  getOrganizations(): Observable<Organization[]> {
    return this.http.get<Organization[]>('http://localhost:3000/organizations', httpOptions)
  }

  getOrganizationUnits(): Observable<OrganizationUnits[]> {
    return this.http.get<OrganizationUnits[]>('http://localhost:3000/organization_units', httpOptions)
  }
}
