// Public components
import Home from './pages/home';
import Login from './pages/auth/login';
import Register from './pages/auth/register'
/**
 * Private components 
 **/ 
import Users from './pages/users/Users';
import Products from './pages/products/Products';
import Dashboard from './pages/dashboard/Dashboard';

/**
 * App component that renders the main layout and routes for the application.
 */
import MainLayout from './layout/RootLayout';
import DashboardLayout from './layout/DashboardLayout';

/**
 * App provider that provides the routes and layout for the application.
 */
import PrivateRoutes from './provider/PrivateRoute';
import RestrictedRoute from './provider/RestrictedRoute';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/404';

import { useEffect } from 'react';
import { fetchUserProfile } from './store/slices/auth.slice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store'; // Update with your actual store file path
import useAuth from './hooks/useAuth';
import Spinner from './components/ui/loader';


import withAuthGuard from './hoc/auth-guard'; // Update with your actual path

// Wrap private components with the HOC
const UsersWithAuth = withAuthGuard(Users);
const ProductsWithAuth = withAuthGuard(Products);
const DashboardWithAuth = withAuthGuard(Dashboard);


function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { token, authenticating} = useAuth();
  useEffect(() => {
    if (token) {
      dispatch(fetchUserProfile());
    }
  }, [dispatch, token]);

  if (authenticating) {
    return <Spinner />; // Display loading indicator here
  }

  return (
    <> 
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />            
            <Route
              path="/login"
              element={
                <RestrictedRoute>
                  <Login />
                </RestrictedRoute>
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute>
                  <Register />
                </RestrictedRoute>
              }
            />
            {/* Private Routes with DashboardLayout */}
            <Route element={<PrivateRoutes />}>
              <Route element={<DashboardLayout />}>
                <Route path="/users" element={<UsersWithAuth />} />
                <Route path="/products" element={<ProductsWithAuth />} />
                <Route path="/dashboard" element={<DashboardWithAuth />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
