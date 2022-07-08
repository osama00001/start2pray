import React from "react";
import Image from "next/image";

export const Intro = () => {
  return (
    <div id="Introduction" className="flex min-h-screen items-center justify-center">
      <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 w-[min(1200px,100%)] mx-auto ">
        <div className="self-start">
        </div>
        <div className="space-y-6 px-10 mt-36 md:mt-0">
          <h2 className="uppercase text-4xl md:text-6xl tracking-wide text-gradient bg-gradient-to-r from-[#aed6f1] to-[#5499c7] font-bold ">
            Introduction
          </h2>
          <p className="text-xl text-gray-700">

Prayer (Salaah) is one of the most fundamental requirements of Islamic faith. To become a Muslim you have to pray five times a day. The Prophet Muhammad (pbuh) said “Everything has a pillar and the pillar of religion is Salaah”. He has also said; “The first thing we will be held accountable on the Day of Judgement is our Salaah”.
Prayer is therefore, one of the first things a new Muslim needs to learn. Thus this website was designed to help you learn how to pray. It covers steps that are required to be done before prayer such as; intention, ablution, prayer direction and timing. It also gives a visuale demonstration of the five daily prayers
          </p>
        </div>
      </section>
    </div>
  );
};
