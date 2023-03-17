import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../../../images/banner/Untitled design (1).jpg'

const BannerImg = () => {
    return (
        <div className='m-auto max-w-screen-xl'>
           <div className='text-center'>
                <Link to='/allProducts' className='btn btn-outline text-orange-500 font-bold border-orange-500 px-20'>Load More</Link>
           </div>
            <div className='grid grid-cols-1 py-16'>
                <img className='
                ' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default BannerImg;