export interface IPrayerData {
  name: "faradh" | "sunnah" | "witar";
  totalRaka: number;
  data: {
    recording: string;
    vttFile: string;
    movementTime: number[][];
    raka: string;
  }[];
}


