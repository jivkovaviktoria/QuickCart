import { Link } from "react-router-dom";
import { Constants } from "../../utilities/Constants";
import { useDiscountedPrice } from "../../hooks/UseDiscountPrice";

export default function ProductCard({ product, view }) {
    const { title, price, brand, thumbnail, stock, discountPercentage } = product;

    const [discountedPrice, setDiscountedPrice] = useDiscountedPrice(price, discountPercentage);

    return (
        <Link to={`/product/${product.id}`} className="no-underline text-black">
            <div className="w-64 h-80 bg-white rounded overflow-hidden shadow-lg flex flex-col justify-between">
                <div className="w-full h-40 bg-gray-200 flex items-center justify-center">
                    <img className="max-h-40 max-w-full object-contain p-2" src={thumbnail} alt={title} />
                </div>
                <div className="px-4 py-2 flex-grow">
                    <div className="font-bold text-lg mb-1">{title}</div>
                    <p className="text-gray-700 text-sm mb-1">{Constants.BRAND}{brand}</p>
                    {view !== 'search' && <p className="text-gray-700 text-sm">
                        {discountPercentage > 0 ? (
                            <>
                                <span className="line-through">${price}</span>
                                <span className="text-green-500 ml-2">${discountedPrice}</span>
                                <span className="text-red-500 ml-2">($-{discountPercentage}%)</span>
                            </>
                        ) : (
                            <span>${price}</span>
                        )}
                    </p>}

                </div>
                {view !== 'search' && <div className="px-4">
                    <p className={`text-sm ${stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {stock > 0 ? 'In Stock' : 'Out of Stock'}
                    </p>
                </div>}
            </div>
        </Link>
    );
}