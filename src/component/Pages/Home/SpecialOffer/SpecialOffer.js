import React from 'react';
import './specialOffer.css'
import offerimg from '../../../../images/offer/Special (1).jpg'
import { Link } from 'react-router-dom';
const SpecialOffer = () => {
    return (
        <div className='m-auto max-w-screen-xl special-offer '>
        <Link className='relative special-offer-sec'>
          <img className='rounded-xl lg:mx-0 mx-3' src={offerimg} alt="" />
          <button className='text-center justify-center'>Shop Now</button>
        </Link>
      </div>
    );
};

export default SpecialOffer;