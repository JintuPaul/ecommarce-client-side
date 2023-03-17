import React from 'react';
import { Link } from 'react-router-dom';

const CategoryProduct = ({product}) => {
    const {_id, author, title, total_view, image_url, details, rating} = product;
    return (
        <div className='p-5 shadow-2xl '>
            <img className='mb-3 category-img' src={image_url} alt="" />
            <Link className='text-sm font-bold text-cyan-500' to={`/detailsProduct/${product._id}`}>Shop Now</Link>
        
        </div>
        
    );
};

export default CategoryProduct;