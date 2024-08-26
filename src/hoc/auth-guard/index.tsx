import React, { ComponentType } from 'react';
import { useLocation } from 'react-router';
import UnAuthorized from '../../components/Not-Authorized';
import useAuth from '../../hooks/useAuth';
import { RolesType } from '../../types/auth';
import { AUTH_GUARDS } from '../../utils/constant/auth';

// Determines whether a user with a certain role can access a specific path
const canSee = (role: RolesType, pathName: string) =>
  AUTH_GUARDS[role].includes(pathName);

// Higher-Order Component that guards access to certain components based on user's role
const withAuthGuard = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const HOC: React.FC<P> = (props) => {
    const { user } = useAuth();
    const { pathname } = useLocation();

    if (user?.role && canSee(user.role, pathname)) {
      return <WrappedComponent {...props as P} />;
    } else {
      return <UnAuthorized />;
    }
  };

  return HOC;
};

export default withAuthGuard;
