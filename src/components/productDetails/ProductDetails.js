import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchProduct,
    removeSelectedProduct,
} from "../../redux/actions/productActions";

const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product;
    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log(product);

    useEffect(() => {
        if (productId && productId !== "") dispatch(fetchProduct(productId));
        return () => {
            dispatch(removeSelectedProduct());
        };
    }, []);
    console.log("SINGLE", product)
    return (
        <div>
            <h1>ProductDetails</h1>
        </div>
    );
};

export default ProductDetails;