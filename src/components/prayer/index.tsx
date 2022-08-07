
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export const PrayerComponent = () => {
  const images = [
    { url: "/img/img1.png" },
    { url: "/img/img2.png" },
    { url: "/img/img3.png" },
    { url: "/img/img4.png" },
    { url: "/img/img55.jpeg" },
    { url: "/img/img6.png" },
  ];

  return (

    <div id="Prayer" className="flex min-h-screen items-center justify-center">
      <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 w-[min(1200px,100%)] mx-auto ">
        <div className="self-start">
          <div>
            <Carousel>
              <div>
                <img src="/img/img1.png" alt="image1"
                  width="100%"
                  height="100%"/>
              </div>
              <div>
              <img src="/img/img2.png" alt="image2"
                  width="100%"
                  height="100%"/>

              </div>
              <div>
              <img src="/img/img3.png" alt="image2"
                  width="100%"
                  height="100%"/>


              </div>
              <div>
              <img src="/img/img4.png" alt="image2"
                  width="100%"
                  height="100%"/>


              </div>
              <div>
              <img src="/img/img55.jpeg" alt="image2"
                  width="100%"
                  height="100%"/>
              </div>
              <div>
              <img src="/img/img6.png" alt="image2"
                  width="100%"
                  height="100%"/>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </div>

  );
};
