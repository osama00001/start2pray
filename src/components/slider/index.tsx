import * as SliderPrimitive from "@radix-ui/react-slider";
import React from "react";

export const Slider = (props: any) => {
  const { onValueChange, value } = props;
  return (
    <SliderPrimitive.Root
      max={0.9999999}
      min={0}
      step={0.01}
      value={[value]}
      onValueChange={(number) => onValueChange(number[0])}
      aria-label="value"
      className="relative flex h-5 w-full touch-none items-center"
    >
      <SliderPrimitive.Track className="relative h-[3px] w-full grow rounded-full bg-slate-300">
        <SliderPrimitive.Range className="absolute h-full rounded-full bg-black" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={"block h-5 w-5 rounded-full bg-black active:bg-black/90"}
      />
    </SliderPrimitive.Root>
  );
};

export default Slider;
