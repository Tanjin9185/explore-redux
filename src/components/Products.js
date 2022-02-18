import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
const Products = () => {
    const products = useSelector((state) => state.allProduct.products)

    return (
        <div>
            {
                products.map((product) => {
                    const { id, category, description, title, image, price, rating } = product;
                    return (
                        <div className="container" key={id}>
                            <div className="row">
                                <div className="col-4">
                                    <Link to={`/product/${id}`}>
                                        <h1>{title}</h1>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
        </div>
    );
};

export default Products;