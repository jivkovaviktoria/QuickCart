import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductCard from "../product-card/ProductCard";
import { GET_ALL_PRODUCTS_URL } from '../../utilities/Constants';

export default function SearchingResultDialog() {
    const [searchResults, setSearchResults] = useState([]);
    const { query } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${GET_ALL_PRODUCTS_URL}/search?q=${query}`)
            .then(res => res.json())
            .then(data => setSearchResults(data.products));
    }, [query]);

    const handleClose = () => {
        navigate(-1);
    };

    return (
        <div className="fixed max-h-full overflow-y-auto inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded w-[75%] h-[90vh] overflow-y-auto flex flex-wrap">
                <button onClick={handleClose} className="text-black w-full flex flex-row justify-end items-start h-5">X</button>
                <div className='flex flex-wrap gap-2'>
                    {searchResults.map(product => (
                        <ProductCard key={product.id} product={product} view={'search'}/>
                    ))}
                </div>
            </div>
        </div>
    );
}