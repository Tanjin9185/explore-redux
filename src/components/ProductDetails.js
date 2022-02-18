import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { selectedProducts, removeSelectedProducts } from '../redux/actions/ProductActions'

const ProductDetails = () => {
    const product = useSelector((state) => state.product)
    const { productId } = useParams();
    const dispatch = useDispatch();
    const fetchProductDetails = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch((error) => {
                console.log("error", error)
            })
        dispatch(selectedProducts(response.data))
    }
    useEffect(() => {
        productId && productId !== '' && fetchProductDetails();
        return () => {
            dispatch(removeSelectedProducts())
        }
    }, [])
    console.log("SINGLE", product)
    return (
        <div>
            <h1>ProductDetails</h1>
        </div>
    );
};

export default ProductDetails;