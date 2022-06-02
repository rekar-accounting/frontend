import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const Slider = () => {
  return (
    <div className="my-24">
      <h2 className="text-center text-xl font-bold"> مشتریان ما</h2>
      <Carousel>
        <div>
          <Image
            src="/brand/apple.jpg"
            alt="image apple"
            width={145}
            height={120}
          />
        </div>
        <div>
          <Image
            src="/brand/adidas.jpg"
            alt="image adidas"
            width={145}
            height={120}
          />
        </div>
        <div>
          <Image
            src="/brand/samsung.jpg"
            alt="image samsung"
            width={145}
            height={120}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
