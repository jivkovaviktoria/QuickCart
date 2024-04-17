import { ArrowLeftIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

    const handleChange = (event) => {
        setProduct({
            ...product,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
            })
            .catch(err => {
                console.error(err);
            });
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className='p-3'>
            <button onClick={handleBack} className="p-2 rounded-full bg-gray-200 mr-2">
                <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pb-8 grid grid-cols-2 gap-4">
                <h1 className='text-black text-bold text-2xl text-center col-span-2'>ADD PRODUCT</h1>
                <div className="mb-2 col-span-2">
                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="title">
                        Title:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="title" value={product.title} onChange={handleChange} required />
                </div>
                <div className="mb-2 col-span-2">
                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="description">
                        Description:
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="description" value={product.description} onChange={handleChange} required />
                </div>
                <div className="mb-2 col-span-2">
                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="stock">
                        Stock:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="stock" value={product.stock} onChange={handleChange} required />
                </div>
                <div className="mb-2 col-span-2">
                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="rating">
                        Rating:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" step="0.01" name="rating" value={product.rating} onChange={handleChange} />
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="price">
                        Price:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="price" value={product.price} onChange={handleChange} required />
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="discountPercentage">
                        Discount Percentage:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="discountPercentage" value={product.discountPercentage} onChange={handleChange} />
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="brand">
                        Brand:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="brand" value={product.brand} onChange={handleChange} required />
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="category">
                        Category:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="category" value={product.category} onChange={handleChange} required />
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="thumbnail">
                        Thumbnail URL:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="thumbnail" value={product.thumbnail} onChange={handleChange} required />
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="images">
                        Images URL (comma separated):
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="images" value={product.images} onChange={handleChange} required />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

/*
    return (
        <div className='p-3'>
            <button onClick={handleBack} className="p-2 rounded-full bg-gray-200 mr-2">
                <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className='text-black text-bold text-2xl mb-5 text-center'>ADD PRODUCT</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="title" value={product.title} onChange={handleChange} required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description:
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="description" value={product.description} onChange={handleChange} required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                        Price:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="price" value={product.price} onChange={handleChange} required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="discountPercentage">
                        Discount Percentage:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="discountPercentage" value={product.discountPercentage} onChange={handleChange} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
                        Rating:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" step="0.01" name="rating" value={product.rating} onChange={handleChange} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stock">
                        Stock:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="stock" value={product.stock} onChange={handleChange} required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brand">
                        Brand:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="brand" value={product.brand} onChange={handleChange} required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                        Category:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="category" value={product.category} onChange={handleChange} required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="thumbnail">
                        Thumbnail URL:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="thumbnail" value={product.thumbnail} onChange={handleChange} required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="images">
                        Images URL (comma separated):
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="images" value={product.images.join(',')} onChange={handleChange} required />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProductAdd;
*/
