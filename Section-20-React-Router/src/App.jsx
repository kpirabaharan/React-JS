import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './routes/Home';
import ProductsPage from './routes/Products';
import RootLayout from './routes/Root';
import ErrorPage from './routes/Error';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
