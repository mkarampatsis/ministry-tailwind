import { Organization } from '../organization';

export const OrganizationInit: Organization = {
  "id": "",
  "code" : "",
  "preferredLabel" : "",
  "alternativeLabels" : [],
  "purpose" : [],
  "identifier" : "",
  "subOrganizationOf" : {
      "code" : "",
      "preferredLabel" : ""
  },
  "organizationType" : {
      "id" : 0,
      "description" : ""
  },
  "description" : "",
  "status" : "",
  "foundationDate" : "",
  "terminationDate" : "",
  "foundationFek" : {
    "year": 1900,
    "number" : "",
    "issue": ""
  },
  "organization_units" : 0
}