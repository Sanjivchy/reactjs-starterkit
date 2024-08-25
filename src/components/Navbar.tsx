
import { Link } from 'react-router-dom';
const Navbar = () => {

  return (
    <header className="bg-gray-800 flex justify-between items-center text-white px-10 py-4">
      <h1>Navbar</h1>
      <nav>
        <ul className="flex items-center gap-6">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/dashboard"}>
              Dashboard
            </Link>
          </li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
