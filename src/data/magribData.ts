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

const fourthRakaa = {
  recording: "/audio/maghreb/magrib-rakaa-3.mp3",
  vttFile: "/audio/maghreb/magrib-rakaa-3-vtt",
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

export const magribPrayerData: IPrayerData[] = [
  {
    name: "fardh",
    totalRaka: 3,
    data: [
      {
        raka: "Magrib Fardh 1",
        ...firstRakaa,
      },
      {
        raka: "Magrib Fardh 2",
        ...secondRakaa,
      },
      {
        raka: "Magrib Fardh 3",
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
