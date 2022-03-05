import { AudioPlayer } from "@components/audioplayer";
import { PlayerModal } from "@components/audioplayer/playerModal";
import { useState } from "react";

const prayerRecords = {
  dhuhr: {
    faradh: {
      totalRaka: 4,
      data: [
        {
          raka: "Dhuhr Faradh 1",
          recording: "/recordings/Dhuhur1.mp3",
          vttFile: "/recordings/Dhuhur-rakaa-1.vtt",
          movementTime: [
            [0, 65],
            [66, 78],
            [79, 85],
            [86, 94],
            [95, 97],
            [98, 106],
            [107, 110],
          ],
        },
        {
          raka: "Dhuhr Faradh 2",
          recording: "/recordings/Dhuhur2.mp3",
          vttFile: "/recordings/Dhuhur-rakaa-1.vtt",
          movementTime: [
            [0, 39],
            [40, 50],
            [51, 58],
            [59, 67],
            [68, 70],
            [71, 79],
            [80, 111],
            [112, 115],
          ],
        },
        {
          raka: "Dhuhr Faradh 3",
          recording: "/recordings/Dhuhur3.mp3",
          vttFile: "/recordings/Dhuhur-rakaa-1.vtt",
          movementTime: [
            [0, 40],
            [41, 52],
            [53, 59],
            [60, 70],
            [71, 73],
            [74, 82],
            [83, 86],
          ],
        },
        {
          raka: "Dhuhr Faradh 4",
          recording: "/recordings/Dhuhur4.mp3",
          vttFile: "/recordings/Dhuhur-rakaa-1.vtt",
          movementTime: [
            [0, 40],
            [41, 52],
            [53, 59],
            [60, 69],
            [70, 72],
            [73, 82],
            [83, 191],
          ],
        },
      ],
    },
  },
};

export const AudioPlayerModal = ({ title }: { title: string }) => {
  const [rakaNumber, setrakaNumber] = useState(0);

  const totalRaka = prayerRecords["dhuhr"]["faradh"].totalRaka;
  const raka = prayerRecords["dhuhr"]["faradh"]["data"][rakaNumber].raka;
  const movementTime =
    prayerRecords["dhuhr"]["faradh"]["data"][rakaNumber].movementTime;
  const recording =
    prayerRecords["dhuhr"]["faradh"]["data"][rakaNumber].recording;
  const vttFile = prayerRecords["dhuhr"]["faradh"]["data"][rakaNumber].vttFile;

  const handlePrevRaka = () => {
    if (rakaNumber > 0) {
      setrakaNumber((state) => state - 1);
    }
  };
  const handleNextRaka = () => {
    if (rakaNumber < totalRaka - 1) {
      setrakaNumber((state) => state + 1);
    }
  };

  return (
    <div>
      <PlayerModal prayerName={raka} title={title}>
        <AudioPlayer
          recording={recording}
          vttFile={vttFile}
          handlePrevRaka={handlePrevRaka}
          handleNextRaka={handleNextRaka}
          movementTime={movementTime}
          rakaNumber={rakaNumber + 1}
        />
      </PlayerModal>
    </div>
  );
};
