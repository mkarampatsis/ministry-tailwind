const organizations = require('./organizations.json');
const organization_units = require('./organization__units.json');

module.exports = () => ({
  organizations: organizations,
  organization_units: organization_units,
});


// json-server --id _id --watch ./src/assets/data/index.js 