import { SpeakerLoudIcon, SpeakerQuietIcon } from "@radix-ui/react-icons";
import * as SliderPrimitive from "@radix-ui/react-slider";
import React, { Dispatch, SetStateAction } from "react";

interface IPlayerVolume {
  setVolume: Dispatch<SetStateAction<number>>;
  volume: number;
}

export const PlayerVolume = ({ setVolume, volume }: IPlayerVolume) => {
  return (
    <div className="flex items-center gap-1">
      <SpeakerQuietIcon />
      <SliderPrimitive.Root
        max={0.9999999}
        min={0}
        step={0.1}
        value={[volume]}
        onValueChange={(number) => setVolume(number[0])}
        aria-label="value"
        className="relative flex h-5 w-[100px] touch-none items-center"
      >
        <SliderPrimitive.Track className="relative h-[3px] w-[100px] grow rounded-full bg-slate-300">
          <SliderPrimitive.Range className="absolute h-full rounded-full bg-black" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          className={"block h-4 w-4 rounded-full bg-black active:bg-black/90"}
        />
      </SliderPrimitive.Root>
      <SpeakerLoudIcon />
    </div>
  );
};
