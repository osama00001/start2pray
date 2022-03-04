import { PrayerCard } from "./prayerCard";

const prayerDetails = [
  {
    name: "dawn prayer(fajr)",
    key: "fajr",
    img: "/img/cards/fajr.png",
    description: "From the break of dawn till the beginning of sunrise",
    color: "#45494f",
    rakats: [
      { rakat: "2-Faradh", url: "#" },
      { rakat: "2-Sunnah", url: "#" },
    ],
  },
  {
    name: "midday prayer(dhuhr)",
    key: "fajr",
    img: "/img/cards/dhuhur.png",
    description:
      "When the sun has just passed the meridian, till the beginning of Asr",
    color: "#34444e",
    rakats: [
      { rakat: "4-Faradh", url: "#" },
      { rakat: "4-Sunnah", url: "#" },
      { rakat: "2-Sunnah", url: "#" },
    ],
  },
  {
    name: "late afternoon prayer(asr)",
    key: "fajr",
    img: "/img/cards/asr.png",
    description: "when the sun is halfway down from noon to sunset",
    color: "#3a4a58",
    rakats: [{ rakat: "4-Faradh", url: "#" }],
  },
  {
    name: "evening prayer(maghrib)",
    key: "magrib",
    img: "/img/cards/maghreb.png",
    description: "Just after sunset till the disappearance of the twilight",
    color: "#454853",
    rakats: [
      { rakat: "3-Faradh", url: "#" },
      { rakat: "2-Sunnah", url: "#" },
    ],
  },
  {
    name: "night prayer(maghrib)",
    key: "isha",
    img: "/img/cards/ishaa.png",
    description: "When the twilight has just disappeared till mid night",
    color: "#2e404e",
    rakats: [
      { rakat: "4-Faradh", url: "#" },
      { rakat: "2-Sunnah", url: "#" },
      { rakat: "3-Witar", url: "#" },
    ],
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
            rakats={prayer.rakats}
          />
        ))}
      </div>
    </section>
  );
};
