'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>
            <Image src="/Long1.jpg" alt="my logo" width={750} height={520} style={{ borderRadius: '25px' }} />
        </h3>
      </div>
      <div>
        <h3>
        <Image src="/Long2.jpg" alt="my logo" width={750} height={520} style={{ borderRadius: '25px' }} />
        </h3>
      </div>
      <div>
        <h3>
        <Image src="/Long3.jpg" alt="my logo" width={750} height={520} style={{ borderRadius: '25px' }} />
        </h3>
      </div>
      <div>
        <h3>
        <Image src="/Long4.jpg" alt="my logo" width={750} height={520} style={{ borderRadius: '25px' }} />
        </h3>
      </div>
      <div>
        <h3><Image src="/Long5.jpg" alt="my logo" width={750} height={520} style={{ borderRadius: '25px' }} />
        </h3>
      </div>
      <div>
        <h3>
        <Image src="/Long6.jpg" alt="my logo" width={750} height={520} style={{ borderRadius: '25px' }} />
        </h3>
      </div>
    </Slider>
  );
}
//*cre : kazacatstore.store*//