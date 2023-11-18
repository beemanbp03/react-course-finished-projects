import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import ProductDetailPage from './pages/ProductDetailPage';

const router = createBrowserRouter([
  { 
    path: '/home',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <HomePage /> }, 
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:id', element: <ProductDetailPage />}
    ]
  },  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
