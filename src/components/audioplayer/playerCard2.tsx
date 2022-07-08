
import { PlayerModal } from "@components/audioplayer/playerModal";
import { IPrayerData } from "@src/data/type";
import { useState } from "react";
import { AudioPlayer2 } from "./AudioPlayer2";
import { PlayerModal2 } from "./playerModal2";


export const AudioPlayerModal2 = ({
  prayerRecord,
}: {
  prayerRecord: any;
}) => {
 

  return (
    <div>
      <h1>Click to listen Athan</h1>
      <br></br>
      <PlayerModal2 prayerName={"Athan "} title={"Athan"}>
        <AudioPlayer2
            recording={"/audio/asr/athan.mp3"}
            vttFile= {"/audio/asr/athan.vtt"}

        />
      </PlayerModal2>
    </div>
  );
};
