import { OrganizationState } from './organization';

export interface AppState {
  organization: OrganizationState;
}

export * from './organization';