import { IPrayerData } from "./type";

const firstRaka = {
  recording: "/audio/fajr/fajr-rakaa-1.mp3",
  vttFile: "/audio/fajr/fajar-rakaa-1.vtt",
  movementTime: [
    [0, 95], // standing
    [95, 109], // bowing
    [109, 115], // standing
    [115, 126], // prostration
    [126, 130], // sitting
    [130, 139], // prostration
    [139, 141], // standing
  ],
};

const secondRaka = {
  recording: "/audio/fajr/fajr-raka-2.mp3",
  vttFile: "/audio/fajr/fajr-rakaa-2.vtt",
  movementTime: [
    [0, 59], // standing
    [59, 70], // bowing
    [71, 78], // standing
    [78, 88], // prostration
    [88, 92], // sitting
    [92, 101], // prostration
    [101, 224], // sitting
  ],
};

export const fajrPrayerData: IPrayerData[] = [
  {
    name: "fardh",
    totalRaka: 2,
    data: [
      {
        raka: "Fajr Fardh 1",
        ...firstRaka,
      },
      {
        raka: "Fajr Fardh 2",
        ...secondRaka,
      },
    ],
  },
  {
    name: "sunnah",
    totalRaka: 2,
    data: [
      {
        raka: "Fajr Sunaah 1",
        ...firstRaka,
      },
      {
        raka: "Fajr Sunnah 2",
        ...secondRaka,
      },
    ],
  },
];
