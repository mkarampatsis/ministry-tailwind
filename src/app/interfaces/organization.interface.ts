export interface Organization {
  id: string;
  code: string;
  preferredLabel: string;
  alternativeLabels: string[];
  purpose: Purpose[];
  identifier: string;
  subOrganizationOf: SubOrganizationOf;
  organizationType: OrganizationType;
  description: string;
  status: string;
  foundationDate: string 
  terminationDate: string;
  foundationFek: FoundationFek;
  organization_units: number;
} 

export interface Purpose {
  id: number;
  description: string;
};

export interface SubOrganizationOf {
  code: string;
  preferredLabel: string;
};

export interface OrganizationType {
  id: number;
  description: string;
};

export interface FoundationFek {
  year: number;
  number: string;
  issue: string;
};
