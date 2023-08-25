import { NavLink, Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div>
      <header>
        <h1 className="logo">Bookstore CMS</h1>
        <NavLink className="nav books" to="/">BOOKS</NavLink>
        <NavLink className="nav category" to="category">CATEGORIES</NavLink>
      </header>
      <main>
        <Outlet />
      </main>

    </div>

  );
}
export default RootLayout;
