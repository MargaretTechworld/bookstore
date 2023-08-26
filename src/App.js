import {
  createBrowserRouter, Route, createRoutesFromElements, RouterProvider,
} from 'react-router-dom';
import './App.css';
import Books from './components/BookList';
import Category from './components/Category';
import RootLayout from './routes/RootLayout';

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Books />} />
        <Route path="category" element={<Category />} />
      </Route>,
    ),
  );

  return (
    <RouterProvider router={routes} />
  );
}

export default App;
