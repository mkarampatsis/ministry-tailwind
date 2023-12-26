import { createAction,  props, createReducer, on } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { catchError, map, of, switchMap } from 'rxjs';

import { AppState } from '@ministry/state';
import { OrganizationUnitsService } from '@ministry/services';
import { OrganizationUnits } from '@ministry/interfaces';

// Organization State
export interface OrganizationUnitsState {
  organization_units: OrganizationUnits[];
  loading: boolean;
  error: string;
}
export const organizationUnitInitialState: OrganizationUnitsState = {
  organization_units: [],
  loading: false,
  error: ''
};

// Organization Actions
export const loadOrganizationUnits = createAction('[Organization Units] Load Organization Units');
export const loadOrganizationUnitsSuccess = createAction('[Organization Units] Load Organization Units Success', props<{ organization_units: OrganizationUnits[] }>());
export const loadOrganizationUnitsFailure = createAction('[Organization Units] Load Organization Units Failure', props<{ error: string }>());

// Organization Reducer
export const organizationUnitsReducer = createReducer<OrganizationUnitsState>(
  organizationUnitInitialState,
  on(loadOrganizationUnits, (state) => ({ ...state, loading: true })),
  on(loadOrganizationUnitsSuccess, (state, { organization_units }) => ({ ...state, organization_units, loading: false })),
  on(loadOrganizationUnitsFailure, (state, { error }) => ({ ...state, error, loading: false }))
);

// Auth Selectors
export const selectOrganizationUnitsState = (state: AppState) => state.organization_units;
export const getOrganizationUnits = (state: AppState) => state.organization_units.organization_units;

// Organizations Effects
export const getOrganizationUnitsEffect = createEffect(
  (
    actions$ = inject(Actions),
    organizationUnitsService = inject(OrganizationUnitsService),
  ) => {
    return actions$.pipe(
      ofType(loadOrganizationUnits),
      switchMap(() => 
        organizationUnitsService.getOrganizationUnits()
         .pipe(
              map((organization_units) => 
                loadOrganizationUnitsSuccess({ organization_units }) 
            ),
            catchError((error) => of(loadOrganizationUnitsFailure({ error: error.message })))
          )
        )
    )
  },
  { functional: true }
);

export const organization_units$ = (state: AppState) => state.organization_units;