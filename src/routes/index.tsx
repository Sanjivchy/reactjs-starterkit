import { BrowserRouter as Routes, Route} from 'react-router-dom'
import Login from '../pages/auth/login';
import Users from '../pages/users/Users';
import Products from '../pages/products/Products';
import PrivateRoutes from '../provider/PrivateRoute';
const RouteIndex = () => {
  return (
        <Routes>
            <Route element={<PrivateRoutes/>}>
                <Route path='/' element={<Users/>} />
                <Route path='/products' element={<Products/>} />
            </Route>
            <Route path='/login' element={<Login/>}/>
        </Routes>
  )
}

export default RouteIndex;