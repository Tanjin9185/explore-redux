import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import Products from "./product/Products"
const ProductLoading = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])
    return (
        <div>
            <Products />
        </div>
    );
};

export default ProductLoading;