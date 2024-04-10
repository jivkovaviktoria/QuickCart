import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, StarIcon, ShoppingCartIcon, TagIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { GET_ALL_PRODUCTS_URL } from '../../utilities/Constants';

export default function ProductDetails() {
    const [product, setProduct] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const { productId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${GET_ALL_PRODUCTS_URL}/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.error(err));
    }, [productId]);

    const handleBack = () => {
        navigate(-1);
    };

    const handleImageChange = (index) => {
        setCurrentImageIndex(index);
    };

    const navigateImage = (direction) => {
        if (direction === 'prev') {
            setCurrentImageIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : product.images.length - 1);
        } else {
            setCurrentImageIndex((prevIndex) => prevIndex < product.images.length - 1 ? prevIndex + 1 : 0);
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-4xl h-[95vh] mx-auto p-4">
            <button onClick={handleBack} className="p-2 rounded-full bg-gray-200 mr-2">
                <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="relative">
                    <img src={product.images[currentImageIndex]} alt={product.title} className="w-full object-contain h-96" />
                    <div className="absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer">
                        <ChevronLeftIcon className="h-10 w-10 text-gray-800" onClick={() => navigateImage('prev')} />
                    </div>
                    <div className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer">
                        <ChevronRightIcon className="h-10 w-10 text-gray-800" onClick={() => navigateImage('next')} />
                    </div>
                </div>
                <div className="flex justify-center space-x-1 p-2">
                    {product.images.map((img, index) => (
                        <button key={index} onClick={() => handleImageChange(index)}>
                            <img src={img} alt={`Thumbnail ${index}`} className={`w-12 h-12 object-cover ${index === currentImageIndex ? 'border-2 border-blue-500' : ''}`} />
                        </button>
                    ))}
                </div>
                <div className="p-6">
                    <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
                    <p className="text-gray-700 mb-4">{product.description}</p>

                    <div className="mb-4">
                        <span className="text-lg font-bold">${product.price}</span>
                        {product.discountPercentage > 0 && (
                            <span className="ml-2 text-sm text-green-600">
                                <TagIcon className="inline h-4 w-4 mr-1" />Save {product.discountPercentage}%
                            </span>
                        )}
                    </div>

                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-col justify-start items-center'>
                            <div className="mb-4">
                                <StarIcon className="inline h-5 w-5 text-yellow-500 mr-1" />
                                <span className="align-middle">{product.rating} / 5</span>
                            </div>

                            <div className="mb-4">
                                <ShoppingCartIcon className={`inline h-5 w-5 mr-1 ${product.stock > 0 ? 'text-green-500' : 'text-red-500'}`} />
                                <span className="align-middle">{product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}</span>
                            </div>
                        </div>

                        <div className='flex flex-col justify-end items-center'>
                            <div className="mb-4">
                                <span className="text-gray-600">Brand: </span>{product.brand}
                            </div>

                            <div>
                                <span className="text-gray-600">Category: </span>{product.category}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}