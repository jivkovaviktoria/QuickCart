import { useEffect, useState } from "react";

export const useDiscountedPrice = (price, discountPercentage) => {
    const [discountedPrice, setDiscountedPrice] = useState(price);

    useEffect(() => {
        const newPrice = discountPercentage > 0 ? Math.round((price * (100 - discountPercentage) / 100) * 100) / 100 : price;
        setDiscountedPrice(newPrice);
    }, []);

    return [discountedPrice, setDiscountedPrice];
};