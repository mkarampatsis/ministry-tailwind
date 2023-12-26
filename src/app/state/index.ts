import { OrganizationState } from './organization.state';
import { OrganizationUnitsState } from './organization-units.state';

export interface AppState {
  organization: OrganizationState;
  organization_units: OrganizationUnitsState
}

export * from './organization.state';
export * from './organization-units.state';