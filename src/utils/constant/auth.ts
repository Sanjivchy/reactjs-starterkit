import { RolesType } from '../../types/auth';
import { ADMIN_HOME_PAGE } from './common';

type PermissionTypes<T> = { [key in T & string]: string[] };

export const AUTH_GUARDS: PermissionTypes<RolesType> = {
  admin: [ADMIN_HOME_PAGE, '/users', '/products'],
  moderator: [ADMIN_HOME_PAGE,'/users'],
  user: [ADMIN_HOME_PAGE,'/products'],
};

export const TOKEN_KEY = {
  TOKEN: 'TOKEN_KEY',
  REFRESH_TOKEN: 'REFRESH_TOKEN_KEY'
}