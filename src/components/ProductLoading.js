import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Products from "./Products"
import axios from 'axios';
import { setProducts } from '../redux/actions/ProductActions'
const ProductLoading = () => {
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
            .get('https://fakestoreapi.com/products')
            .catch((error) => {
                console.log("error", error)
            })
        dispatch(setProducts(response.data))
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    return (
        <div>
            <Products />
        </div>
    );
};

export default ProductLoading;