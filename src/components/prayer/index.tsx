import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Image from "next/image";
export const PrayerComponent = () => {
    const images = [
       {url: "/img/img1.png"},
       {url: "/img/img2.png"},
       {url: "/img/img33.jpeg"},
       {url: "/img/img4.png"},
       {url: "/img/img55.jpeg"},
       {url: "/img/img6.png"},
      ];
    
      return (
        
            <div id="Prayer" className="flex min-h-screen items-center justify-center">
            <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 w-[min(1200px,100%)] mx-auto ">
            <div className="self-start">
      <SimpleImageSlider
        width={500}
        height={500}
        images={images}
                 
        showBullets={true}
        showNavs={true}
      />
      </div>
      </section>
        </div>

      );
};
