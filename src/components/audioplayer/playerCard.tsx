import { AudioPlayer } from "@components/audioplayer";
import { PlayerModal } from "@components/audioplayer/playerModal";
import { IPrayerData } from "@src/data/type";
import { useState } from "react";

export const AudioPlayerModal = ({
  prayerRecord,
}: {
  prayerRecord: IPrayerData;
}) => {
  const [rakaNumber, setrakaNumber] = useState(0);

  const { name, totalRaka, data } = prayerRecord;
  const rakaName = `${totalRaka}-${name}`;

  const { raka, vttFile, recording, movementTime } = data[rakaNumber];

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
      <PlayerModal prayerName={raka} title={rakaName}>
        <AudioPlayer
          recording={recording}
          vttFile={vttFile}
          handlePrevRaka={handlePrevRaka}
          handleNextRaka={handleNextRaka}
          movementTime={movementTime}
          rakaNumber={rakaNumber + 1}
          totalRaka={totalRaka}
        />
      </PlayerModal>
    </div>
  );
};
