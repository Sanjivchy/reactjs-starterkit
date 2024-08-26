
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
  const { logout, authenticated } = useAuth();

  return (
    <header className="bg-gray-800 flex justify-between items-center text-white px-10 text-sm py-4">
      <h1>
        <Link to="/">SC</Link>
      </h1>
      <nav>
        <ul className="flex items-center gap-6 text-xs">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          {
            authenticated ? 
            <>
              <li>
                <Link to={"/dashboard"}>
                  Dashboard
                </Link>
              </li>
              <li>
                <button
                  onClick={logout}
                >
                  Logout
                </button>
              </li>
            </> 
          : 
            <>
              <li>
                <Link to={"/login"}>
                  Login
                </Link>
              </li>
              <li>
                <Link to={"/register"}>
                  Register
                </Link>
              </li>
            </>
          }
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
