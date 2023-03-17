import React, { useState } from 'react';
import { BsStarFill } from 'react-icons/bs';
import { Link, useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import './details.css'
const DetailsProduct = () => {
    const product = useLoaderData()
    const {_id, author, title, allinfo, image_url, details, rating} = product;
    console.log(product)
    return (
        <div className='max-w-screen-xl m-auto py-10'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center items-center'>
                <div>
                    <img src={image_url} alt="" />
                </div>
                <div className='mx-10 lg:mx-0'>
                    <h2 className='text-2xl font-semibold text-gray-700 mb-2'>Brand: {author.name}</h2>
                    <h3 className='text-xl font-bold text-sky-600 mb-4'>{title}</h3>
                    <p className='text-orange-400 font-semibold mb-5
                     '>Released Date: {author.published_date}</p>
                     <p className='flex mb-3 font-semibold'>Rating: <BsStarFill className='mr-1 mt-1 text-orange-400 ml-2'></BsStarFill>{rating.number}</p>
                     <h4 className='text-semibold text-lg mb-4'>Performance: {rating.badge}</h4>
                     <Link className='btn btn-secondary mr-3'>Add To Cart</Link>
                     <label htmlFor="bookingModal" className="btn btn-primary">Buy Now</label>
                </div>
                <div className='mx-10 lg:mx-0'>
                    <h3 className="text-2xl mb-6 font-semibold">Product Details of <br /> {title}</h3>
                    <ul >
                        <li className=' list-items  list-disc'>Brand: {author.name}</li>
                        <li className=' list-items list-disc'>Model: {allinfo.model}</li>
                        <li className=' list-items list-disc'>Color: {allinfo.color}</li>
                        <li className=' list-items list-disc'>Android: {allinfo.android}</li>
                        <li className=' list-items list-disc'>Back camera: {allinfo.backCamera}</li>
                        <li className=' list-items list-disc'>Front Camera: {allinfo.frontCamera}</li>
                        <li className=' list-items list-disc'>Battery: {allinfo.battery}</li>
                        <li className=' list-items list-disc'>Ram: {allinfo.ram}</li>
                        <li className=' list-items list-disc'>Rom: {allinfo.rom}</li>
                        <li className=' list-items list-disc'>Size: {allinfo.size}</li>
                        <li className=' list-items list-disc'>Weight: {allinfo.width}</li>
                        <li className=' list-items list-disc'>Video resolution: {allinfo.resulation}</li>
                        <li className=' list-items list-disc'>Made in: {allinfo.madein}</li>
                    </ul>
                </div>
            </div>
            <BookingModal
                product={product}
            ></BookingModal>
        </div>
    );
};

export default DetailsProduct;