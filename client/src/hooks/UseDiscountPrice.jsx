export function useDiscountedPrice (price, discountPercentage){
    if(price == null || discountPercentage == null) return 0;
    return discountPercentage > 0 ? Math.round((price * (100 - discountPercentage) / 100) * 100) / 100 : price;
};