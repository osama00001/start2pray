import { Modal } from "@components/modal";

const prayerPreparation = [
  {
    title: "cleanliness",
    content: [
      "Allah SWT says in the Quran",
      " إن الله يحب التوابين ويحب المتطهرين ",
      "For Allah loves those who turn to him constantly and He loves those who keep themselves pure and clean ",
      "Allah SWT wants Muslims to always remain clean; especially while praying. Therefore a Muslim should make sure that his body, clothes and the space he/she will pray in is free from any impurities. ",
      "Impurites in islam include:",
      "1. Urine",
      "2. Stool",
      "3. Vomit",
    ],
  },
  {
    title: "wudhu",
    content: [
      "Wudhu is the act of cleansing certain parts of your body, in a specific order, with clean water. Before a Muslim prays, he/she has to perform Wudhu. ",
      "The prophet pbuh says: ",
      "'The prayer of the person who does not perform ablution is not valid' ",
      "(Recorded by Ibn Majah, Abu Dawuud and others)",
      "In this short video, we will explain how to perform wudhu.",
    ],
  },
  {
    title: "iqamah",
    content: [
      "In Islam men are ordered to pray the obligatory prayers in congregation (i.e, to pray with a group of men). ",
      "However, if a man prays alone then he should recite the iqamah before starting to pray. ",
      "Click on the audio below to listen to the iqamah.",
    ],
  },
  {
    title: "qiblah",
    content: [
      "The qiblah is the direction Muslims face while praying. ",
      " Muslims are ordered to pray towards the K'abaa in Mecca, Saudi Arabia. Therefore, the qiblah changes depending on where a Muslim is located. ",
      "Click on the compass below to know the qiblah of your country.",
    ],
  },
  {
    title: "prayers timing",
    content: [
      "Prayer timings are dictated by the positioning of the sun during the day. This will differ from season to season and from country to country. Therefore, prayer timings will be determined on your location and the time of the year. ",
      "In predominant Muslim countries, Muslims use the call to prayer athan to signal that it is time to pray. ",
      "Please listen to this audio to hear the athan. ",
      "To find out the prayer timings in your country, please type your location below.",
    ],
  },
];

export const PrayerPreparation = () => {
  return (
    <section
      id="prayers_preparation"
      className="flex flex-col items-center justify-center w-[min(1300px,100%)] mx-auto min-h-screen"
    >
      <h2 className="uppercase mb-20 text-center text-4xl md:text-6xl tracking-wide text-gradient bg-gradient-to-r from-[#aed6f1] to-[#5499c7] font-bold ">
        Prepration of prayers
      </h2>
      <div className="flex px-10 flex-wrap w-full items-center children:my-5 sm:children:mx-3">
        {prayerPreparation.map((prayer, i) => (
          <Modal
            isVedio={prayer.title === "wudhu"}
            title={prayer.title}
            key={i}
            preparation={prayer.content}
          />
        ))}
      </div>
    </section>
  );
};
