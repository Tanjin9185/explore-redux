import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const a = useParams();
    console.log("a", a)
    return (
        <div>
            <h1>ProductDetails</h1>
        </div>
    );
};

export default ProductDetails;