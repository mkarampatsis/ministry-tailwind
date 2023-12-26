import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { organizationReducer, getOrganizationsEffect, organizationUnitsReducer, getOrganizationUnitsEffect } from '@ministry/state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    provideStore({ organization: organizationReducer, organization_units: organizationUnitsReducer }),
    provideEffects([{ getOrganizationsEffect, getOrganizationUnitsEffect }]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
],
  
};
