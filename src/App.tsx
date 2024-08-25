import './App.css';
// Public imports
import Home from './pages/home';
import Login from './pages/auth/login/Login';

// Private imports
import Users from './pages/users/Users';
import Products from './pages/products/Products';
import Dashboard from './pages/dashboard/Dashboard';

import PrivateRoutes from './provider/PrivateRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/RootLayout';
import DashboardLayout from './layout/DashboardLayout';
import NotFound from './pages/404';
function App() {
  return (
    <Router>
      <Routes>
        {/* Apply MainLayout to all routes */}
        <Route element={<MainLayout />}>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

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
  );
}

export default App;
