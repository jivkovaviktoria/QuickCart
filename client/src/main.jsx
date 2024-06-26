import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProductsTable from './components/products-table/ProductsTable.jsx';
import SearchingResultDialog from './components/searching-result-dialog/SearchingResultDialog.jsx';
import ProductDetails from './components/product-details/ProductsDetails.jsx';
import ProductEdit from './components/product-edit/ProductEdit.jsx';
import ProductAdd from './components/product-add/ProductAdd.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/products',
    element: <ProductsTable />
  },
  {
    path: 'search/:query',
    element: <SearchingResultDialog/>
  },
  {
    path: 'product/:productId',
    element: <ProductDetails/>
  },
  {
    path: 'product-edit/:productId',
    element: <ProductEdit/>
  },
  {
    path: '/product-add',
    element: <ProductAdd/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
