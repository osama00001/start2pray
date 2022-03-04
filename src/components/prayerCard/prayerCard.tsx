import React from "react";
import Image from "next/image";
import { Modal } from "@components/modal";

interface IPrayerCard {
  imgUrl: string;
  name: string;
  description: string;
  bgColor: string;
  rakats: {
    rakat: string;
    url: string;
  }[];
}

export const PrayerCard = ({
  imgUrl,
  name,
  description,
  bgColor,
  rakats,
}: IPrayerCard) => {
  return (
    <section
      className={`bg-primary flex flex-col items-center gap-8 min-h-[500px] rounded-xl py-6 w-[min(300px,100%)] shrink-0 grow sm:grow-0`}
      style={{ background: bgColor }}
    >
      <div className="relative w-40 h-40">
        <Image src={imgUrl} alt="fajr" layout="fill" objectFit="contain" />
      </div>
      <Modal title={name} rakats={rakats} />
      <p className="text-white/90 text-center px-7 font-semibold">
        {description}
      </p>
    </section>
  );
};
