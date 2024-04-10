import { useEffect, useState } from 'react';
import './App.css'
import { GET_CATEGORIES_URL, GET_PRODUCTS_IN_CATEGORY_URL, GET_ALL_PRODUCTS_URL } from './utilities/Constants';
import CategoriesList from './components/categories-list/CategoriesList';
import ProductsTable from './components/products-table/ProductsTable';
import Navigation from './components/navigation/Navigation';

function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(GET_CATEGORIES_URL)
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  useEffect(() => {
    const url = selectedCategory === 'all'
      ? GET_ALL_PRODUCTS_URL
      : GET_PRODUCTS_IN_CATEGORY_URL(selectedCategory);
      
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, [selectedCategory]);

  return (
    <div className="flex flex-col">
      <Navigation></Navigation>
      <div className="flex flex-row">
        <CategoriesList categories={categories} onCategorySelect={setSelectedCategory} />
        <ProductsTable products={products} />
      </div>
    </div>
  );
}

export default App
