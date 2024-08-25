
import { Link } from 'react-router-dom';
const Navbar = () => {

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
          <li>
            <Link to={"/dashboard"}>
              Dashboard
            </Link>
          </li>
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
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
