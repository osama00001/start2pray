import { PrayerComponent } from '@components/prayer';
import React from 'react';
// import { Document, Page } from 'react-pdf';


export const SimplifiedSalah = () => {
  return (


    <div id="simplifiedSalah" className="flex min-h-screen items-center justify-center">
      <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 w-[min(1200px,100%)] mx-auto ">
        <div className="self-start">
        </div>
        <div className="space-y-6 px-10 mt-36 md:mt-0">
          <h2 className="uppercase text-4xl md:text-6xl tracking-wide text-gradient bg-gradient-to-r from-[#aed6f1] to-[#5499c7] font-bold ">
          extra illustration
          </h2>
          {/* <object data="/img/Salaat Simplified - z-card.pdf" type="application/pdf" width="1400" height="800">
          </object> */}
          <PrayerComponent/>
          <iframe src={`/img/SalaatSimplified.pdf#view=fitH`} title="simplifiedSalah" height="900" width="900" />

        </div>
      </section>
    </div>



  );
}