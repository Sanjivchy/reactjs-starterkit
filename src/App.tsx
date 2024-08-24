import './App.css';
import Login from './pages/auth/login/Login';
import Users from './pages/Users';
import Products from './pages/Products';
import PrivateRoutes from './provider/PrivateRoute';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes/>}>
              <Route path='/' element={<Users/>} />
              <Route path='/products' element={<Products/>} />
          </Route>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
