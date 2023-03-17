import { Divider } from '@mui/material';
import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import {products} from './product'
import './slider.css'
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

const Slider = () => {
    return (
        <div className=''>
            <div className='slider-title flex justify-between mb-4'>
                <h2 className='text-slate-600'>Deal of the day</h2>
                <button className='btn btn-primary'>View all</button>
            </div>
            <Divider/>
            <div className='mt-6'>
            <Carousel
                responsive={responsive}
                infinite={true}
                draggable={false}
                swipeable={true}
                centerMode={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                showDots={false}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
                >
                {
                    products.map((e) => {
                        return (
                            <div key={e.id} className='product-items p-4'>
                                
                                <img className='mb-4' src={e.url} alt="offer product" />
                                <h4 className='justify-center'>{e.title.shortTitle}</h4>
                                <h4 className='justify-center'>{e.discount}</h4>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
        </div>
    );
};

export default Slider;