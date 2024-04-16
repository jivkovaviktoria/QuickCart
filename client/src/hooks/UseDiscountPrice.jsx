import { useEffect, useState } from "react";

export const useDiscountedPrice = (price, discountPercentage) => {
    const [discountedPrice, setDiscountedPrice] = useState(price);

    useEffect(() => {
        const newPrice = discountPercentage > 0 ? (price * (100 - discountPercentage) / 100).toFixed(2) : price;
        setDiscountedPrice(newPrice);
    }, [price, discountPercentage]);

    return [discountedPrice, setDiscountedPrice];
};