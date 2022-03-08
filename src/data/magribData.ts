import { IPrayerData } from "./type";

const firstRakaa = {
  recording: "/audio/maghreb/magrib-rakaa-1.mp3",
  vttFile: "/audio/maghreb/magrib-rakaa-1.vtt",
  movementTime: [
    [0, 96], // standing
    [96, 108], // bowing
    [108, 115], // standing
    [115, 126], // prostration
    [126, 129], // sitting
    [129, 138], // prostration
    [138, 141], // standing
  ],
};

const secondRakaa = {
  recording: "/audio/maghreb/magrib-rakaa-2.mp3",
  vttFile: "/audio/maghreb/magrib-rakaa-2.vtt",
  movementTime: [
    [0, 74], // standing
    [74, 85], // bowing
    [85, 92], // standing
    [92, 102], // prostration
    [102, 105], // sitting
    [105, 114], // prostration
    [114, 146], // sitting
    [146, 148], // standing
  ],
};

const thirdRakaa = {
  recording: "/audio/maghreb/magrib-rakaa-3.mp3",
  vttFile: "/audio/maghreb/magrib-rakaa-3.mp3",
  movementTime: [
    [0, 40],
    [41, 52],
    [53, 59],
    [60, 70],
    [71, 73],
    [74, 82],
    [83, 86],
  ],
};

const fourthRakaa = {
  recording: "/audio/maghreb/magrib-rakaa-3.mp3",
  vttFile: "/audio/maghreb/magrib-rakaa-3.mp3",
  movementTime: [
    [0, 40], // standing
    [41, 53], // bowing
    [53, 60], // standing
    [60, 70], // prostration
    [70, 73], // sitting
    [73, 83], // prostration
    [83, 191], // sitting
  ],
};

export const magribPrayerData: IPrayerData[] = [
  {
    name: "faradh",
    totalRaka: 3,
    data: [
      {
        raka: "Magrib Faradh 1",
        ...firstRakaa,
      },
      {
        raka: "Magrib Faradh 2",
        ...secondRakaa,
      },
      {
        raka: "Magrib Faradh 3",
        ...fourthRakaa,
      },
    ],
  },
  {
    name: "sunnah",
    totalRaka: 2,
    data: [
      {
        raka: "Magrib Sunnah 1",
        ...firstRakaa,
      },
      {
        raka: "Magrib Sunnah 2",
        ...fourthRakaa,
      },
    ],
  },
];
