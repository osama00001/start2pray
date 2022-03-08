import { IPrayerData } from "./type";

const firstRakaa = {
  recording: "/audio/dhuhur/dhuhur-rakaa-1.mp3",
  vttFile: "/audio/dhuhur/dhuhur-rakaa-1.vtt",
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
  recording: "/audio/dhuhur/dhuhur-rakaa-2.mp3",
  vttFile: "/audio/dhuhur/dhuhur-rakaa-2.vtt",
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
  recording: "/audio/dhuhur/dhuhur-rakaa-3.mp3",
  vttFile: "/audio/dhuhur/dhuhur-rakaa-3.vtt",
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
  recording: "/audio/dhuhur/dhuhur-rakaa-4.mp3",
  vttFile: "/audio/dhuhur/dhuhur-rakaa-4.vtt",
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

export const dhuhurPrayerData: IPrayerData[] = [
  {
    name: "faradh",
    totalRaka: 4,
    data: [
      {
        raka: "Dhuhr Faradh 1",
        ...firstRakaa,
      },
      {
        raka: "Dhuhr Faradh 2",
        ...secondRakaa,
      },
      {
        raka: "Dhuhr Faradh 3",
        ...thirdRakaa,
      },
      {
        raka: "Dhuhr Faradh 4",
        ...fourthRakaa,
      },
    ],
  },
  {
    name: "sunnah",
    totalRaka: 4,
    data: [
      {
        raka: "Dhuhr Sunnah 1",
        ...firstRakaa,
      },
      {
        raka: "Dhuhr Sunnah 2",
        ...secondRakaa,
      },
      {
        raka: "Dhuhr Sunnah 3",
        ...thirdRakaa,
      },
      {
        raka: "Dhuhr Sunnah 4",
        ...fourthRakaa,
      },
    ],
  },
  {
    name: "sunnah",
    totalRaka: 2,
    data: [
      {
        raka: "Dhuhr Sunnah 1",
        ...firstRakaa,
      },
      {
        raka: "Dhuhr Sunnah 2",
        ...fourthRakaa,
      },
    ],
  },
];

// faradh: {
//   totalraka: 4,
//   data: [
//     {
//       raka: "dhuhr faradh 1",
//       recording: "/recordings/dhuhur1.mp3",
//       vttfile: "/recordings/dhuhur-rakaa-1.vtt",
//       movementtime: [
//         [0, 65],
//         [66, 78],
//         [79, 85],
//         [86, 94],
//         [95, 97],
//         [98, 106],
//         [107, 110],
//       ],
//     },
//     {
//       raka: "dhuhr faradh 2",
//       recording: "/recordings/dhuhur2.mp3",
//       vttfile: "/recordings/dhuhur-rakaa-1.vtt",
//       movementtime: [
//         [0, 39],
//         [40, 50],
//         [51, 58],
//         [59, 67],
//         [68, 70],
//         [71, 79],
//         [80, 111],
//         [112, 115],
//       ],
//     },
//     {
//       raka: "dhuhr faradh 3",
//       recording: "/recordings/dhuhur3.mp3",
//       vttfile: "/recordings/dhuhur-rakaa-1.vtt",
//       movementtime: [
//         [0, 40],
//         [41, 52],
//         [53, 59],
//         [60, 70],
//         [71, 73],
//         [74, 82],
//         [83, 86],
//       ],
//     },
//     {
//       raka: "dhuhr faradh 4",
//       recording: "/recordings/dhuhur4.mp3",
//       vttfile: "/recordings/dhuhur-rakaa-1.vtt",
//       movementtime: [
//         [0, 40],
//         [41, 52],
//         [53, 59],
//         [60, 69],
//         [70, 72],
//         [73, 82],
//         [83, 191],
//       ],
//     },
//   ],
// },
