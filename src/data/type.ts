export interface IPrayerData {
  name: "fardh" | "sunnah" | "witar";
  totalRaka: number;
  data: {
    recording: string;
    vttFile: string;
    movementTime: number[][];
    raka: string;
  }[];
}


