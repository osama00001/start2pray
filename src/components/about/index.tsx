import React from "react";
import Image from "next/image";

export const About = () => {
  return (
    <div id="About us" className="flex min-h-screen items-center justify-center">
      <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 w-[min(1200px,100%)] mx-auto ">
        <div className="self-start">
          <Image
            width={400}
            height={400}
            objectFit="cover"
            src="/img/about-img.jpg"
            alt="about us"
          />
        </div>
        <div className="space-y-6 px-10 mt-36 md:mt-0">
          <h2 className="uppercase mb-20 mx-auto tracking-wide text-[#5499c7] text-6xl font-bold ml-2 text-center ">
            About us
          </h2>
          <p className="text-xl text-gray-700">
            Islamic Information Center Sultan Qaboos Grand Mosque, Muscat
          </p>
        </div>
      </section>
    </div>
  );
};
