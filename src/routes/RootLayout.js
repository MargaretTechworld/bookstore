import { FaUser } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div>
      <header>
        <div className="nav-container">
          <h1 className="logo">Bookstore CMS</h1>
          <NavLink className="nav books" to="/">BOOKS</NavLink>
          <NavLink className="nav category" to="category">CATEGORIES</NavLink>
        </div>
        <div>
          <FaUser className="user" size={14} />
        </div>
      </header>
      <main>
        <Outlet />
      </main>

    </div>

  );
}
export default RootLayout;
