import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import BannerImg from '../BannerImg/BannerImg';
import CategoryProduct from '../Product/CategoryProduct';
import RightSlide from '../Slider/RightSlide';
import Slider from '../Slider/Slider';
import SpecialOffer from '../SpecialOffer/SpecialOffer';

const Home = () => {
    const allProducts = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className="slide-carousel  max-w-screen-xl m-auto py-10 n flex-none lg:flex justify-center items-center">
                <div className="left-slide lg:w-4/5 w-full">
                    <Slider></Slider>
                </div>
                <div className="right-slide lg:w-1/5 w-full ml-3">
                    <RightSlide></RightSlide>
                </div>
            </div>
            <SpecialOffer></SpecialOffer>

            <div className='grid grid-cols-1 lg:grid-cols-3 max-w-screen-xl m-auto gap-8 py-20'>
            {
                allProducts.map(product => <CategoryProduct
                    product={product}
                    key={product._id}
                ></CategoryProduct>)
            }
            </div>

            <BannerImg></BannerImg>

        </div>
    );
};

export default Home;