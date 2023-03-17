import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CategoryProduct from './CategoryProduct';

const Products = () => {
     const products = useLoaderData()
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 max-w-screen-xl m-auto gap-8 py-4'>
            {
                products?.map(product => <CategoryProduct
                    product={product}
                    key={product._id}
                ></CategoryProduct>)
            }
        </div>
    );
};

export default Products;