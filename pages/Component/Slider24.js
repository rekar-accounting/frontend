import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class Hazhar extends Component {
	render() {
		return (
			<div className='my-24'>
                <h2 className='text-center text-xl font-bold'> مشتریان ما </h2>
                <Carousel>
                    <div className='mx-auto py-5 w-44'>
                        <img src="brand/apple.jpg" alt="image1"/>
                    </div>
                    <div className=' mx-auto w-44'>
                        <img src="brand/adidas.jpg" alt="" />
                    </div>
                    <div className=' mx-auto w-44 pt-5'>
                        <img src="brand/samsung.jpg" alt="" />
                    </div>
                </Carousel>
			</div>
		);
	}
};
