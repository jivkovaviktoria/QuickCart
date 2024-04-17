import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductCard from "../product-card/ProductCard";
import { Constants, GET_ALL_PRODUCTS_URL } from '../../utilities/Constants';

export default function SearchingResultDialog() {
    const [searchResults, setSearchResults] = useState([]);
    const { query } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        fetch(`${GET_ALL_PRODUCTS_URL}/search?q=${query}`, {signal: signal})
            .then(res => res.json())
            .then(data => setSearchResults(data.products))
            .catch((error) => {
                if(signal.aborted) return;
                console.error(error);
            })
    }, [query]);

    const handleClose = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    return (
        <div className="fixed max-h-full overflow-y-auto inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded w-[75%] h-[90vh] overflow-y-auto flex flex-wrap">
                <button onClick={handleClose} className="text-black w-full flex flex-row justify-end items-start h-5">{Constants.REMOVE}</button>
                <div className='flex flex-wrap gap-2'>
                    {searchResults.map(product => (<ProductCard key={product.id} product={product} view={'search'} />))}
                </div>
            </div>
        </div>
    );
}