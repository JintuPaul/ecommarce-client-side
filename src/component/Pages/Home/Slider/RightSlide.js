import React from 'react';
import { Link } from 'react-router-dom';
import phoneImg from '../../../../../src/images/banner/NicePng_sony-png_8746232.png'
import './slider.css'
const RightSlide = () => {
    return (
           <div className='rightSide-img text-center mr-3 lg:mr-0 rounded-lg'>
                <h2 className='text-lg text-center text-gray-900 py-5'>Festive Latest Launches</h2>
                <div className='right-side-image rounded-xl'>
                    <img src={phoneImg} alt="" />
                </div>
                <Link to='/' className='text-center'>View All</Link>
           </div>
    );
};

export default RightSlide;