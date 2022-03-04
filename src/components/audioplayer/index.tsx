import ReactAudioPlayer from "react-audio-player";

export const AudioPlayer = () => {
  return (
    <div>
      <ReactAudioPlayer
        src="/recordings/Dhuhur2.mp3"
        autoPlay
        controls
        className="bg-blue-50"
      />
    </div>
  );
};
