import { Purpose, SubOrganizationOf, OrganizationType } from './organization';

export interface OrganizationUnits {
  id: string;
  code: string;
  preferredLabel: string;
  alternativeLabels: string[];
  purpose: Purpose[];
  subOrganizationOf: SubOrganizationOf;
  organizationType: OrganizationType;
  description: string;
  units: Units[];
} 

export interface Units {
  code: string;
  organizationCode: string;
  preferredLabel: string;
  purpose: Purpose[];
  unitType: UnitType;
  surervisorUnitCode: SurervisorUnitCode;
};

export interface UnitType {
  id: string;
  description: string;
};

export interface SurervisorUnitCode{
  code: string;
  preferredLabel: string;
};