import get from 'lodash/get';

export const getIsAuthorized = state => !!get(state, 'accountPage.user');
export const getUser = state => get(state, 'accountPage.user', {});
export const getIsAdmin = state =>
    get(state, 'accountPage.user.isAdmin', false);

export default { getIsAdmin };
