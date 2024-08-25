import { RolesType } from '../../types/auth';
import { ADMIN_HOME_PAGE } from './common';

type PermissionTypes<T> = { [key in T & string]: string[] };

export const AUTH_GUARDS: PermissionTypes<RolesType> = {
  admin: [ADMIN_HOME_PAGE, '/users', '/products'],
  developer: ['/users'],
  manager: ['/products'],
};