const BASE_URL = "https://dummyjson.com/products";

export const GET_ALL_PRODUCTS_URL = `${BASE_URL}`;
export const GET_CATEGORIES_URL = `${BASE_URL}/categories`;
export const GET_PRODUCTS_IN_CATEGORY_URL = (category) => `${BASE_URL}/category/${category}`;

export class Constants {
    //API
    static BASE_URL = "https://dummyjson.com/products";
    static GET_ALL_PRODUCTS_URL = `${Constants.BASE_URL}`;
    static GET_CATEGORIES_URL = `${Constants.BASE_URL}/categories`;
    static GET_PRODUCTS_IN_CATEGORY_URL = (category) => `${Constants.BASE_URL}/category/${category}`;

    // Global constants

    static ALL = "all";
    static SHOP_NAME = "QuickCart";
    static HOME = "Home";
    static PRODUCTS = "Products";
    static CATEGORIES = "Categories";

    static BRAND = "Brand: ";
    static CATEGORY = "Category: ";
    static PREVIOUS = "prev";
    static NEXT = "next";
}