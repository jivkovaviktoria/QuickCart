import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeftIcon, StarIcon, ShoppingCartIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { Constants, GET_ALL_PRODUCTS_URL } from '../../utilities/Constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import DeleteConfirmationModal from '../common/delete-confirmation-modal/DeleteConfirmationModal';
import { useDiscountedPrice } from '../../hooks/UseDiscountPrice';

export default function ProductDetails() {
    const [product, setProduct] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const discountedPrice = useDiscountedPrice(product?.price, product?.discountPercentage);

    const { productId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        fetch(`${GET_ALL_PRODUCTS_URL}/${productId}`, { signal: signal })
            .then(res => res.json())
            .then(data => { setProduct(data); })
            .catch(err => {
                if(signal.aborted) return;
                console.error(err)
            });

        return () => {
            controller.abort();
        };
    }, [productId]);

    const handleBack = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    const handleImageChange = (index) => {
        setCurrentImageIndex(index);
    };

    const navigateImage = (direction) => {
        if (direction === Constants.PREVIOUS) setCurrentImageIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : product.images.length - 1);
        else setCurrentImageIndex((prevIndex) => prevIndex < product.images.length - 1 ? prevIndex + 1 : 0);
    };

    const handleDelete = async () => {
        const response = await fetch(`${Constants.BASE_URL}/${product.id}`, { method: 'DELETE', }).catch((error) => console.error(error));
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        navigate(-2);
        setIsDeleteModalOpen(false);
    };

    if (!product) {
        return <div>{Constants.LOADING}</div>;
    }

    return (
        <div className="max-w-4xl h-[95vh] mx-auto p-4">
            <div className="flex flex-row flex-between">
                <button onClick={handleBack} className="p-2 rounded-full bg-gray-200 mr-2">
                    <ArrowLeftIcon className="h-5 w-5" />
                </button>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="relative">
                    <img src={product.images[currentImageIndex]} alt={product.title} className="w-full object-contain h-96" />
                    <div className="absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer">
                        <ChevronLeftIcon className="h-10 w-10 text-gray-800" onClick={() => navigateImage(Constants.PREVIOUS)} />
                    </div>
                    <div className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer">
                        <ChevronRightIcon className="h-10 w-10 text-gray-800" onClick={() => navigateImage(Constants.NEXT)} />
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
                        {product.discountPercentage > 0 ? (
                            <>
                                <span className="line-through">${product.price}</span>
                                <span className="text-green-500 ml-2">${discountedPrice}</span>
                                <span className="text-red-500 ml-2">($-{product.discountPercentage}%)</span>
                            </>
                        ) : (
                            <span>${price}</span>
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
                                <span className="text-gray-600">{Constants.BRAND} </span>{product.brand}
                            </div>

                            <div>
                                <span className="text-gray-600">{Constants.CATEGORY} </span>{product.category}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-row justify-end gap-3 mt-2 items-center'>
                <Link to={`/product-edit/${product.id}`} className="no-underline text-black">
                    <div className="flex justify-between items-center">
                        <button className="bg-green-500 text-white p-2 rounded flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                        </button>
                    </div>
                </Link>
                <div className="flex justify-between items-center">
                    <button onClick={() => setIsDeleteModalOpen(true)} className="bg-red-500 text-white p-2 rounded flex items-center">
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            </div>

            {isDeleteModalOpen &&
                <DeleteConfirmationModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} onDelete={handleDelete} />
            }
        </div>
    );
}