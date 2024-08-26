import { Navigate } from 'react-router-dom';
import useAuth  from '../hooks/useAuth'; // Assuming you have an `useAuth` hook

const RestrictedRoute = ({ children }: { children: React.ReactNode }) => {
  const { authenticated } = useAuth(); // Replace with your authentication logic

  if (authenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

export default RestrictedRoute;
