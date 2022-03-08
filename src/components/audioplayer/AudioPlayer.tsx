import {
  PauseIcon,
  PlayIcon,
  TrackNextIcon,
  TrackPreviousIcon,
} from "@radix-ui/react-icons";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import styles from "./audioplayer.module.css";
import Image from "next/image";
import Slider from "@components/slider";
import { PlayerVolume } from "@components/volumeSlider";

interface IAudioPlayer {
  recording: string;
  vttFile: string;
  rakaNumber: number;
  totalRaka: number;
  movementTime: number[][];
  handlePrevRaka: () => void;
  handleNextRaka: () => void;
}
export const AudioPlayer = ({
  vttFile,
  recording,
  totalRaka,
  handleNextRaka,
  handlePrevRaka,
  movementTime,
  rakaNumber,
}: IAudioPlayer) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [completeDuration, setCompleteDuration] = useState("");
  const [imageIndex, setImageIndex] = useState(1);

  const playerRef = useRef<ReactPlayer>(null!);

  const handlePlaying = () => setIsPlaying((state) => !state);

  const handleSlider = (value: any) => {
    setPlayed(value);
    playerRef.current.seekTo(parseFloat(value));
  };

  const handleProgress = (value: any) => {
    setPlayed(value.played);
    setPlayedSeconds(value.playedSeconds);
  };

  function secondsToTime(e: number) {
    let m = Math.floor((e % 3600) / 60)
        .toString()
        .padStart(2, "0"),
      s = Math.floor(e % 60)
        .toString()
        .padStart(2, "0");

    return `${m}:${s}`;
  }

  // Change image at different intervals of the audio, movementTime contains data about
  // when to change the image

  useEffect(() => {
    const seconds = Math.round(playedSeconds);
    if (seconds && movementTime) {
      if (seconds >= movementTime[0][0] && seconds < movementTime[0][1]) {
        console.log("first condition", seconds);
        setImageIndex(1);
      } else if (
        seconds >= movementTime[1][0] &&
        seconds < movementTime[1][1]
      ) {
        console.log("second condition", seconds);
        setImageIndex(2);
      } else if (
        seconds >= movementTime[2][0] &&
        seconds < movementTime[2][1]
      ) {
        console.log("third condition", seconds);
        setImageIndex(3);
      } else if (
        seconds >= movementTime[3][0] &&
        seconds < movementTime[3][1]
      ) {
        console.log("fourth condition", seconds);
        setImageIndex(4);
      } else if (
        seconds >= movementTime[4][0] &&
        seconds < movementTime[4][1]
      ) {
        console.log("fifth condition", seconds);
        setImageIndex(5);
      } else if (
        seconds >= movementTime[5][0] &&
        seconds < movementTime[5][1]
      ) {
        console.log("sixth condition", seconds);
        setImageIndex(4);
      } else if (
        movementTime[6] &&
        seconds >= movementTime[6][0] &&
        seconds < movementTime[6][1]
      ) {
        console.log("seventh condition", seconds);
        if (totalRaka === 3) {
          setImageIndex(rakaNumber === 1 ? 1 : 5); // for prayer with 3 rakaa
        } else {
          setImageIndex(rakaNumber === 1 || rakaNumber === 3 ? 1 : 5); // if rakaa Number is 2 or 4th then person should be in sitting position otherwise in standing position
        }
      } else if (
        movementTime[7] &&
        seconds >= movementTime[7][0] &&
        seconds < movementTime[7][1]
      ) {
        console.log("eighth condition", seconds);
        setImageIndex(1); // make the person stand in the 2 rakaa of 4 rakaa prayer after Tashahhud
      }
    }
  }, [playedSeconds, movementTime, rakaNumber, totalRaka]);

  return (
    <div className="w-[min(400px,100%)]">
      <PrayerGuide imageIndex={imageIndex} />
      <ReactPlayer
        url={recording}
        className={styles["react-player"]}
        ref={playerRef}
        height={100}
        width="100%"
        playsinline={true}
        controls={false}
        volume={volume}
        key={rakaNumber}
        playing={isPlaying}
        onProgress={handleProgress}
        progressInterval={1000}
        onDuration={(duration) => setCompleteDuration(secondsToTime(duration))}
        config={{
          file: {
            attributes: {
              crossOrigin: "anonymous",
            },
            tracks: [
              {
                kind: "subtitles",
                src: vttFile,
                srcLang: "en",
                default: true,
                label: "transcript",
              },
            ],
            forceVideo: true,
          },
        }}
      />

      <div className="flex flex-col mx-auto mt-5 items-center w-[80%] gap-5">
        <div className="flex gap-3">
          <PrevButton handlePrevRaka={handlePrevRaka} />
          <PlayButton handlePlaying={handlePlaying} isPlaying={isPlaying} />
          <NextButton handleNextRaka={handleNextRaka} />
        </div>
        <div className="flex gap-3 w-full">
          <span>{secondsToTime(playedSeconds)}</span>
          <Slider onValueChange={handleSlider} value={played} />
          <span>{completeDuration}</span>
        </div>
        <PlayerVolume volume={volume} setVolume={setVolume} />
      </div>
    </div>
  );
};

const PrayerGuide = ({ imageIndex }: { imageIndex: number }) => {
  console.log("image guide", imageIndex);
  return (
    <div className="relative w-[200px] h-[200px]  mx-auto">
      <Image
        priority
        width="100%"
        height="100%"
        quality={100}
        layout="fill"
        objectFit="cover"
        src={`/img/N${imageIndex}.png`}
        alt=""
      />
    </div>
  );
};

const PrevButton = ({ handlePrevRaka }: { handlePrevRaka: () => void }) => {
  return (
    <button className="rounded-full p-1 relative" onClick={handlePrevRaka}>
      <span className="text-sm absolute w-max -top-1 -left-4 text-gray-800">
        Prev Rakaa
      </span>
      <TrackPreviousIcon
        width={35}
        height={35}
        fill="black"
        className="transition-all stroke-black/90 "
      />
    </button>
  );
};

const NextButton = ({ handleNextRaka }: { handleNextRaka: () => void }) => {
  return (
    <button className="rounded-full p-1 relative" onClick={handleNextRaka}>
      <span className="text-sm absolute w-max -top-1 -right-4 text-gray-800">
        Next Rakaa
      </span>
      <TrackNextIcon
        width={35}
        height={35}
        className="transition-all stroke-black/90"
      />
    </button>
  );
};

interface IPlayButton {
  handlePlaying: () => void;
  isPlaying: boolean;
}
const PlayButton = ({ isPlaying, handlePlaying }: IPlayButton) => {
  return (
    <button
      className="bg-black/90 hover:bg-black/80 active:bg-black/90 rounded-full p-3 "
      onClick={handlePlaying}
    >
      {isPlaying ? (
        <PauseIcon
          width={50}
          height={50}
          className="transition-all stroke-white"
        />
      ) : (
        <PlayIcon
          width={50}
          height={50}
          className="stroke-white relative left-1 transition-all"
        />
      )}
    </button>
  );
};

interface ICaptionButton {
  setShowTranscript: Dispatch<SetStateAction<boolean>>;
}

export const CaptionButton = ({ setShowTranscript }: ICaptionButton) => (
  <button>
    <svg
      width={24}
      height={24}
      onClick={() => setShowTranscript((state) => !state)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{"ic_fluent_closed_caption_24_regular"}</title>
      <path
        d="M18.75 4A3.25 3.25 0 0 1 22 7.25v9.505a3.25 3.25 0 0 1-3.25 3.25H5.25A3.25 3.25 0 0 1 2 16.755V7.25a3.25 3.25 0 0 1 3.066-3.245L5.25 4h13.5Zm0 1.5H5.25l-.144.006A1.75 1.75 0 0 0 3.5 7.25v9.505c0 .966.784 1.75 1.75 1.75h13.5a1.75 1.75 0 0 0 1.75-1.75V7.25a1.75 1.75 0 0 0-1.75-1.75ZM5.5 12c0-3.146 2.713-4.775 5.122-3.401A.75.75 0 1 1 9.878 9.9C8.481 9.104 7 9.994 7 12c0 2.005 1.484 2.896 2.88 2.103a.75.75 0 1 1 .74 1.304C8.216 16.775 5.5 15.143 5.5 12Zm7.5 0c0-3.146 2.713-4.775 5.122-3.401a.75.75 0 1 1-.744 1.302C15.981 9.104 14.5 9.994 14.5 12c0 2.005 1.484 2.896 2.88 2.103a.75.75 0 1 1 .74 1.304C15.716 16.775 13 15.143 13 12Z"
        fill="#212121"
        fillRule="nonzero"
      />
    </svg>
  </button>
);
