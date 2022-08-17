import { IPrayerData } from "./type";

const firstRakaa = {
  recording: "/audio/asr/asr-rakaa-1.mp3",
  vttFile: "/audio/asr/asr-rakaa-1.vtt",
  movementTime: [
    [0, 66], // standing
    [66, 79], // bowing
    [79, 86], // standing
    [86, 95], // prostration
    [95, 98], // sitting
    [98, 107], // prostration
    [107, 110], // standing
  ],
};

const secondRakaa = {
  recording: "/audio/asr/asr-rakaa-2.mp3",
  vttFile: "/audio/asr/asr-rakaa-2.vtt",
  movementTime: [
    [0, 40],
    [40, 51],
    [51, 59],
    [59, 68],
    [68, 71],
    [71, 80],
    [80, 112],
    [112, 115],
  ],
};

const thirdRakaa = {
  recording: "/audio/asr/asr-rakaa-3.mp3",
  vttFile: "/audio/asr/asr-rakaa-3.vtt",
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
  recording: "/audio/asr/asr-rakaa-4.mp3",
  vttFile: "/audio/asr/asr-rakaa-4.vtt",
  movementTime: [
    [0, 40],
    [41, 53],
    [53, 60],
    [60, 70],
    [70, 73],
    [73, 83],
    [83, 191],
  ],
};

export const ashrPrayerData: IPrayerData[] = [
  {
    name: "fardh",
    totalRaka: 4,
    data: [
      {
        raka: "Ashr Fardh 1",
        ...firstRakaa,
      },
      {
        raka: "Ashr Farah 2",
        ...secondRakaa,
      },
      {
        raka: "Ashr Fardh 3",
        ...thirdRakaa,
      },
      {
        raka: "Ashr Fardh 4",
        ...fourthRakaa,
      },
    ],
  },
];
