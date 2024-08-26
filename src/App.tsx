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
function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { token, authenticating, user } = useAuth();
  useEffect(() => {
    if (token) {
      dispatch(fetchUserProfile());
    }
  }, [dispatch, token]);

  if (authenticating) {
    return <Spinner />; // Display loading indicator here
  }

  if (!user) {
    return <div>No user profile available.</div>;
  }
  return (
    <> 
      <Router>
        <Routes>
          {/* Apply MainLayout to all routes */}
          <Route element={<MainLayout />}>
            {/* Public Routes */}
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
                <Route path="/users" element={<Users />} />
                <Route path="/products" element={<Products />} />
                <Route path="/dashboard" element={<Dashboard />} />
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
