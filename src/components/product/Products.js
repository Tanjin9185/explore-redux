import React from 'react';
import './Products.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
const Products = () => {
    const products = useSelector((state) => state.allProducts.products)
    console.log("pppp", products)
    return (
        <><div className="container" >
            <div className="row">
                {
                    products.map((product) => {
                        const { id, category, description, title, image, price, rating } = product;
                        return (
                            <div className="col-4" key={id}>

                                <Link to={`/product/${id}`}>
                                    <h3>{title}</h3>
                                    <img src={image} alt="" className="img-responsive" width="100" />

                                    <p>{description}</p>
                                    <div>
                                        <p>{price}</p>
                                        <p>{rating.rate}</p>
                                    </div>
                                </Link>

                            </div>
                        )
                    })
                }
            </div>
        </div>

        </>
    );
};

export default Products;