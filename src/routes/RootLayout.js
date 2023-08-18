import { NavLink, Outlet } from 'react-router-dom';

const header = {
  display: 'flex',
  alignItems: 'center',
  paddingTop: ' 1%',
  paddingLeft: '5%',
  paddingRight: '5%',
  marginBottom: '4%',
};
const nav = {
  padding: '0 10px',
  fontSize: '1.2rem',
  textDecoration: 'none',
};
const logo = {
  color: '#0290FF',
};

function RootLayout() {
  return (
    <div>
      <div style={header}>
        <h1 style={logo}>Bookstore CMS</h1>
        <div>
          <NavLink style={nav} to="/">Books</NavLink>
          <NavLink style={nav} to="category">Categories</NavLink>
        </div>
      </div>
      <main>
        <Outlet />
      </main>

    </div>

  );
}
export default RootLayout;
