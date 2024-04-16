import { useEffect, useState } from 'react';
import { Constants } from './utilities/Constants';
import './App.css'
import { GET_CATEGORIES_URL, GET_PRODUCTS_IN_CATEGORY_URL, GET_ALL_PRODUCTS_URL } from './utilities/Constants';
import CategoriesList from './components/categories-list/CategoriesList';
import ProductsTable from './components/products-table/ProductsTable';
import Navigation from './components/navigation/Navigation';


function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(Constants.ALL);

  useEffect(() => {
    fetch(GET_CATEGORIES_URL)
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <div className="flex flex-col">
      <Navigation></Navigation>
      <div className="flex flex-row">
        <CategoriesList categories={categories} onCategorySelect={setSelectedCategory} />
        <ProductsTable category={selectedCategory} />
      </div>
    </div>
  );
}

export default App
