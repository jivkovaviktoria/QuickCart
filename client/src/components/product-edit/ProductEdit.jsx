import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/outline';
import { ImageList } from '../common/image-list/ImageList';

export default function ProductEdit() {
    const [productData, setProductData] = useState({});
    const [images, setImages] = useState([]);

    const { productId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${productId}`)
            .then(res => res.json())
            .then(data => {
                setImages(data.images);
                setProductData(data);
            })
            .catch(err => console.error(err));
    }, [productId]);

    const handleChange = (e) => {
        const updatedProductData = { ...productData, [e.target.name]: e.target.value };
        setProductData(updatedProductData);
        setImages(updatedProductData.images);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {id, ...productDataWithoutId} = productData;
            const response = await fetch(`https://dummyjson.com/products/${productId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(productDataWithoutId)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
        } catch (error) {
            console.error('There was a problem with the fetch operation: ' + error.message);
        }
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <button onClick={handleBack} className="p-2 rounded-full bg-gray-200 mr-2">
                <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Edit Product</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={productData.title}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Description
                    </label>
                    <textarea
                        type="textarea"
                        name="description"
                        id="description"
                        value={productData.description}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-4 flex flex-row justify-stretch items-center gap-2">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                            Price
                        </label>
                        <input
                            type="number"
                            min="1"
                            step="any"
                            name="price"
                            id="price"
                            value={productData.price}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="discount">
                            Discount Percent
                        </label>
                        <input
                            type="number"
                            min="1"
                            step="any"
                            name="discount"
                            id="discount"
                            value={productData.discountPercentage}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
                            Quantity
                        </label>
                        <input
                            type="number"
                            min="1"
                            step="1"
                            name="quantity"
                            id="quantity"
                            value={productData.stock}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                </div>

                <ImageList images={images} setImages={setImages} />

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update Product</button>
            </form>
        </div>
    );
}