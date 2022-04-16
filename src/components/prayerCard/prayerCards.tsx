import { prayerRecords } from "@src/data/prayerRecords";
import { PrayerCard } from "./prayerCard";

const prayerDetails = [
  {
    name: "dawn prayer(fajr)",
    key: "fajr",
    img: "/img/cards/fajr.png",
    description: "From the break of dawn till the beginning of sunrise.",
    color: "#45494f",
    rakats: [{ rakat: "2-Faradh" }, { rakat: "2-Sunnah" }],
  },
  {
    name: "midday prayer(dhuhr)",
    key: "dhuhr",
    img: "/img/cards/dhuhur.png",
    description:
      "When the sun has just passed the meridian, till the beginning of Asr.",
    color: "#34444e",
    rakats: [
      { rakat: "4-Faradh" },
      { rakat: "4-Sunnah" },
      { rakat: "2-Sunnah" },
    ],
  },
  {
    name: "late afternoon prayer(asr)",
    key: "asr",
    img: "/img/cards/asr.png",
    description: "when the sun is halfway down from noon to sunset.",
    color: "#3a4a58",
    rakats: [{ rakat: "4-Faradh" }],
  },
  {
    name: "evening prayer(maghrib)",
    key: "magrib",
    img: "/img/cards/maghreb.png",
    description: "Just after sunset till the disappearance of the twilight.",
    color: "#454853",
    rakats: [{ rakat: "3-Faradh" }, { rakat: "2-Sunnah" }],
  },
  {
    name: "night prayer(Isha)",
    key: "isha",
    img: "/img/cards/ishaa.png",
    description: "When the twilight has just disappeared till night.",
    color: "#2e404e",
    rakats: [
      { rakat: "4-Faradh" },
      { rakat: "2-Sunnah" },
      { rakat: "3-Witar" },
    ],
  },
];

export const PrayerCards = () => {
  return (
    <section id="prayerCards" className="grid grid-flow-row items-center my-20">
      <h2 className="uppercase mb-20 text-6xl mx-auto tracking-wide text-[#aed6f1] font-bold ">
        choose
        <div className="text-[#5499c7] ml-2">prayer</div>
      </h2>
      <div className="flex  flex-wrap justify-center  mx-5">
        {prayerDetails.map((prayer, i) => (
          <div key={prayer.key} className="w-[min(300px,100%)] m-3">
            <PrayerCard
              name={prayer.name}
              imgUrl={prayer.img}
              description={prayer.description}
              bgColor={prayer.color}
              rakats={prayer.rakats}
              audioModalData={prayerRecords[i]}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
