import { Navigate, Outlet } from 'react-router-dom'
// import { useAuth } from '../store/slices/auth.slice'
const PrivateRoutes = () => {
  const auth = { 'token': true }

  return (
    auth.token ? <Outlet /> : <Navigate to="/login" />
  )
}

export default PrivateRoutes