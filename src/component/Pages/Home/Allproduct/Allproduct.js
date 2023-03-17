import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryProduct from '../Product/CategoryProduct';

const Allproduct = () => {
    const products = useLoaderData()
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 max-w-screen-xl m-auto gap-8 py-12'>
        {
            products.map(product => <CategoryProduct
                product={product}
                key={product._id}
            ></CategoryProduct>)
        }
    </div>
    );
};

export default Allproduct;