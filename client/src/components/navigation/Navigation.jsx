import { ShoppingCartIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav className="bg-gray-800 text-white p-4 h-12 fixed top-0 left-0 right-0 z-10 flex flex-row items-center">
          <div className="container flex flex-row justify-between items-center">
            <div className="flex flex-row items-center">
              <ShoppingCartIcon className="h-8 w-8 mr-2 text-white"/>
              <Link to="/" className="text-xl font-semibold">QuickCart</Link>
            </div>
            <div>
              <Link to="/" className="px-4 py-2 hover:bg-gray-700 rounded">Home</Link>
              <Link to="/products" className="px-4 py-2 hover:bg-gray-700 rounded">Products</Link>
            </div>
          </div>
        </nav>
      );
}
