import axios from "axios";

const url = "http://localhost:8081/api/";

export const getAllProducts = async (page = 0) => {

    try {

        const response = await axios.get(`${url}public/products?page=${page}`);
        console.log(response.data);
        return response.data;

    } catch (error) {
        return error;
    }
    
}

export const getProduct = async (id) => { 
 
    try {

        const response = await axios.get(`${url}public/products/${id}`);
        return response.data;

    } catch (error) {
        return error;
    }
    
}

export const getProductByCategory = async (category, page=0) => {

    try {

        const response = await axios.get(`${url}public/products/categories/${category}?page=${page}`); 
        return response.data;

    } catch (error) {
        return error;
    }
    
}

export const deleteProduct = async (id) => {

    try {

        const response = await axios.get(`${url}admin/products/${id}`);
        return response.data;

    } catch (error) {
        return error;
    }
    
}

export const addProduct = async (product) => {

    try {

        const response = await axios.post(`${url}admin/products`, product);
        return response.data;

    } catch (error) {
        return error;
    }
    
}