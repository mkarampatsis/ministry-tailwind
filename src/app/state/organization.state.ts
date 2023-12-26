import { createAction,  props, createReducer, on } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { catchError, map, of, switchMap } from 'rxjs';

import { AppState } from '@ministry/state';
import { OrganizationService } from '@ministry/services';
import { Organization } from '@ministry/interfaces';

// Organization State
export interface OrganizationState {
  organizations: Organization[];
  loading: boolean;
  error: string;
}
export const organizationInitialState: OrganizationState = {
  organizations: [],
  loading: false,
  error: ''
};

// Organization Actions
export const loadOrganizations = createAction('[Organization] Load Organizations');
export const loadOrganizationsSuccess = createAction('[Organization] Load Organizations Success', props<{ organizations: Organization[] }>());
export const loadOrganizationsFailure = createAction('[Organization] Load Organizations Failure', props<{ error: string }>());

// Organization Reducer
export const organizationReducer = createReducer<OrganizationState>(
  organizationInitialState,
  on(loadOrganizations, (state) => ({ ...state, loading: true })),
  on(loadOrganizationsSuccess, (state, { organizations }) => ({ ...state, organizations, loading: false })),
  on(loadOrganizationsFailure, (state, { error }) => ({ ...state, error, loading: false }))
);

// Auth Selectors
export const selectOrganizationState = (state: AppState) => state.organization;
export const getOrganizations = (state: AppState) => state.organization.organizations;

// Organizations Effects
export const getOrganizationsEffect = createEffect(
  (
    actions$ = inject(Actions),
    organizationService = inject(OrganizationService),
  ) => {
    return actions$.pipe(
      ofType(loadOrganizations),
      switchMap(() => 
        organizationService.getOrganizations()
         .pipe(
            map((organizations) =>  
              loadOrganizationsSuccess({ organizations })
            ),
            catchError((error) => of(loadOrganizationsFailure({ error: error.message })))
          )
        )
    )
  },
  { functional: true }
);

export const organizations$ = (state: AppState) => state.organization;