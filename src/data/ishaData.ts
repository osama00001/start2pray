import { IPrayerData } from "./type";

const firstRakaa = {
  recording: "/audio/ishaa/ishaa-rakaa-1.mp3",
  vttFile: "/audio/ishaa/ishaa-rakaa-1.vtt",
  movementTime: [
    [0, 86], // standing
    [86, 100], // bowing
    [100, 106], // standing
    [106, 117], // prostration
    [117, 120], // sitting
    [120, 129], // prostration
    [129, 131], // standing
  ],
};

const secondRakaa = {
  recording: "/audio/ishaa/ishaa-rakaa-2.mp3",
  vttFile: "/audio/ishaa/ishaa-rakaa-2.vtt",
  movementTime: [
    [0, 92], // standing
    [92, 102], // bowing
    [102, 111], // standing
    [111, 121], // prostration
    [121, 124], // sitting
    [124, 133], // prostration
    [133, 161], // sitting
  ],
};

const thirdRakaa = {
  recording: "/audio/ishaa/ishaa-rakaa-3.mp3",
  vttFile: "/audio/ishaa/ishaa-rakaa-3.vtt",
  movementTime: [
    [0, 41], // standing
    [42, 52], // bowing
    [53, 59], // standing
    [60, 70], // prostration
    [71, 73], // sitting
    [74, 82], // prostration
    [83, 86], // standing
  ],
};

const fourthRakaa = {
  recording: "/audio/ishaa/ishaa-rakaa-4.mp3",
  vttFile: "/audio/ishaa/ishaa-rakaa-4.vtt",
  movementTime: [
    [0, 40], // standing
    [41, 53], // bowing
    [53, 60], // standing
    [60, 70], // prostration
    [70, 73], // sitting
    [73, 83], // prostration
    [83, 225], // sitting
  ],
};

export const ishaPrayerData: IPrayerData[] = [
  {
    name: "faradh",
    totalRaka: 4,
    data: [
      {
        raka: "Isha Faradh 1",
        ...firstRakaa,
      },
      {
        raka: "Isha Faradh 2",
        ...secondRakaa,
      },
      {
        raka: "Isha Faradh 3",
        ...thirdRakaa,
      },
      {
        raka: "Isha Faradh 4",
        ...fourthRakaa,
      },
    ],
  },
  {
    name: "sunnah",
    totalRaka: 2,
    data: [
      {
        raka: "Isha Sunnah 1",
        ...firstRakaa,
      },
      {
        raka: "Isha Sunnah 2",
        ...fourthRakaa,
      },
    ],
  },
  {
    name: "witar",
    totalRaka: 3,
    data: [
      {
        raka: "Isha Witar 1",
        ...firstRakaa,
      },
      {
        raka: "Isha Witar 2",
        ...secondRakaa,
      },
      {
        raka: "Isha Witar 3",
        ...fourthRakaa,
      },
    ],
  },
];
