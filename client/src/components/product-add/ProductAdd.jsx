import { ArrowLeftIcon } from '@heroicons/react/outline';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Constants } from '../../utilities/Constants';

export default function ProductAdd() {
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        name: '',
        price: '',
        discountPercentage: '',
        description: '',
        quantity: '',
        category: '',
        images: []
    });

    const handleChange = useCallback((event) => {
        setProduct(x => {
            return ({
                ...x,
                [event.target.name]: event.target.value,
            });
        });
    }, []);

    const handleSubmit = useCallback((event) => {
        event.preventDefault();

        fetch(`${Constants.BASE_URL}/add`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        }).catch(err => {console.error(err);});
    }, [product]);

    const handleBack = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    return (
        <div className='p-3'>
            <button onClick={handleBack} className="p-2 rounded-full bg-gray-200 mr-2">
                <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pb-8 grid grid-cols-2 gap-4">
                <h1 className='text-black text-bold text-2xl text-center col-span-2'>{Constants.ADD_PRODUCT}</h1>
                <div className="mb-2 col-span-2">
                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="title">
                        {Constants.TITLE}
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="title" value={product.title} onChange={handleChange} required />
                </div>
                <div className="mb-2 col-span-2">
                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="description">
                        {Constants.DESCRIPTION}
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="description" value={product.description} onChange={handleChange} required />
                </div>
                <div className="mb-2 col-span-2">
                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="stock">
                        {Constants.QUANTITY}
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="stock" value={product.stock} onChange={handleChange} required />
                </div>
                <div className="mb-2 col-span-2">
                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="rating">
                        {Constants.RATING}
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" step="0.01" name="rating" value={product.rating} onChange={handleChange} />
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="price">
                        {Constants.PRICE}
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="price" value={product.price} onChange={handleChange} required />
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="discountPercentage">
                        {Constants.DISCOUNT_PERCENTAGE}
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="discountPercentage" value={product.discountPercentage} onChange={handleChange} />
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="brand">
                        {Constants.BRAND}
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="brand" value={product.brand} onChange={handleChange} required />
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="category">
                        {Constants.CATEGORY}
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="category" value={product.category} onChange={handleChange} required />
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="thumbnail">
                        {Constants.TEMPLATE_URL}
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="thumbnail" value={product.thumbnail} onChange={handleChange} required />
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="images">
                        {Constants.IMAGES} (comma separated):
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="images" value={product.images} onChange={handleChange} required />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        {Constants.SUBMIT}
                    </button>
                </div>
            </form>
        </div>
    );
};
