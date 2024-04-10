import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { SearchIcon } from '@heroicons/react/outline';
import ProductCard from "../product-card/ProductCard";

export default function ProductsTable({ products }) {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search?query=${searchQuery}`);
    };

    return (
        <div className="mt-[50px]">
            <form onSubmit={handleSearch} className="flex justify-center p-4">
                <input
                    type="text"
                    placeholder="Search products..."
                    className="p-2 border rounded-l shadow w-full max-w-md"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button 
                    type="submit" 
                    className="bg-gray-800 text-white p-2 rounded-r">
                    <SearchIcon className="h-5 w-5" />
                </button>
            </form>
            <div className="flex flex-wrap gap-4 p-4 ml-20">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}