import { PrayerCard } from "./prayerCard";

const prayerDetails = [
  {
    name: "dawn prayer(fajr)",
    key: "fajr",
    img: "/img/cards/fajr.png",
    description: "From the break of dawn till the beginning of sunrise",
    color: "#45494f",
  },
  {
    name: "midday prayer(dhuhr)",
    key: "fajr",
    img: "/img/cards/dhuhur.png",
    description:
      "When the sun has just passed the meridian, till the beginning of Asr",
    color: "#34444e",
  },
  {
    name: "late afternoon prayer(asr)",
    key: "fajr",
    img: "/img/cards/asr.png",
    description: "when the sun is halfway down from noon to sunset",
    color: "#3a4a58",
  },
  {
    name: "evening prayer(maghrib)",
    key: "magrib",
    img: "/img/cards/maghreb.png",
    description: "Just after sunset till the disappearance of the twilight",
    color: "#454853",
  },
  {
    name: "night prayer(maghrib)",
    key: "isha",
    img: "/img/cards/ishaa.png",
    description: "When the twilight has just disappeared till mid night",
    color: "#2e404e",
  },
];

export const PrayerCards = () => {
  return (
    <section className="flex items-center  my-20 flex-col gap-8">
      <h2 className="uppercase mb-20 text-6xl tracking-wide text-[#aed6f1] font-bold ">
        choose
        <div className="text-[#5499c7] ml-2">prayer</div>
      </h2>
      <div className="flex  flex-wrap justify-center gap-8 mx-5">
        {prayerDetails.map((prayer) => (
          <PrayerCard
            key={prayer.key}
            name={prayer.name}
            imgUrl={prayer.img}
            description={prayer.description}
            bgColor={prayer.color}
          />
        ))}
      </div>
    </section>
  );
};
