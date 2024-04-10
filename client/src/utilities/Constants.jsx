const BASE_URL = "https://dummyjson.com/products";

export const GET_ALL_PRODUCTS_URL = `${BASE_URL}`;
export const GET_CATEGORIES_URL = `${BASE_URL}/categories`;
export const GET_PRODUCTS_IN_CATEGORY_URL = (category) => `${BASE_URL}/category/${category}`;