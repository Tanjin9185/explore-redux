import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Products from "./Products"
import axios from 'axios';
import { setProducts } from '../redux/actions/ProductActions'
const ProductLoading = () => {
    // const products = useSelector((state) => state.allProduct.products)
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
            .get('https://fakestoreapi.com/products')
            .catch((error) => {
                console.log("ugu", error)

            })
        dispatch(setProducts(response.data))
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    // console.log('products', products)
    return (
        <div>
            <Products />
        </div>
    );
};

export default ProductLoading;