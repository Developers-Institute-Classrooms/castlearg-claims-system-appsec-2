const foo = require('../express-oauth2-jwt-bearer');
const { requiredScopes } = foo;
const scopes = {
    READ_ALL_CLAIMS : 'readall:claims',
    EDIT_CLAIMS : 'edit:claims'
}

const approverScopes = requiredScopes(scopes.READ_ALL_CLAIMS, scopes.READ_ALL_CLAIMS);
module.exports = approverScopes;
