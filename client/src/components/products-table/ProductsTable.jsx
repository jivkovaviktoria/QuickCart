import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { SearchIcon } from '@heroicons/react/outline';
import { Constants, GET_PRODUCTS_IN_CATEGORY_URL } from "../../utilities/Constants";
import ProductCard from "../product-card/ProductCard";

export default function ProductsTable({ category }) {
    const [products, setProducts] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const limit = 15;
    const totalPages = Math.ceil(totalItems / limit);

    const navigate = useNavigate();

    useEffect(() => {
        const skip = (currentPage - 1) * limit;

        const url = category === Constants.ALL
            ? `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
            : GET_PRODUCTS_IN_CATEGORY_URL(category);

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setTotalItems(data.total);
            });
    }, [currentPage, category]);

    useEffect(() => {
        setCurrentPage(1);
    }, [category]);

    const handleNext = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePrev = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search/${searchQuery}`);
    };

    return (
        <div className="mt-[50px]">
            <div className="grid grid-cols-3 items-center p-1"> {/* Change this div */}
                <div></div>
                <form onSubmit={handleSearch} className="flex justify-center">
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
                <div className="flex justify-end mr-2"> {/* Add this div */}
                    <Link to={`/product-add`} className="no-underline text-black">
                        <button className="bg-green-500 text-white p-2 rounded flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /> {/* Plus icon */}
                            </svg>
                            <span className="ml-2">Add product</span> {/* Add product text */}
                        </button>
                    </Link>
                </div>
            </div>
            <div className="flex flex-wrap gap-4 p-4 ml-20">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <div className="flex justify-center py-3">
                <button
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                    className={`mx-2 px-4 py-2 rounded text-white ${currentPage === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'}`}
                >
                    Previous
                </button>
                <div className="mx-2">
                    Page {currentPage}
                </div>
                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className={`mx-2 px-4 py-2 rounded text-white ${currentPage === totalPages ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'}`}>
                    Next
                </button>
            </div>
        </div>
    );
}