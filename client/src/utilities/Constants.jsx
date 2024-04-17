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
    static CATEGORIES = "Categories";

    //Actions

    static PREVIOUS = "prev";
    static NEXT = "next";
    static DELETE_MESSAGE = "Are you sure you want to delete this item?";
    static CONFIRM_DELETE = "Confirm Delete";
    static DELETE = "Delete";
    static CANCEL = "Cancel";
    static REMOVE = "X";
    static ADD_PRODUCT = "Add product";
    static EDIT_PRODUCT = "Edit product";

    //Product Details

    static PRODUCT_DETAILS = "Product Details";
    static TITLE = "Title: ";
    static DESCRIPTION = "Description: ";
    static PRICE = "Price: ";
    static IMAGES = "Images";
    static DISCOUNT_PERCENTAGE = "Discount Percentage: ";
    static CATEGORY = "Category: ";
    static BRAND = "Brand: ";
    static UPDATE_PRODICT = "Update Product";
    static QUANTITY = "Quantity: ";
}