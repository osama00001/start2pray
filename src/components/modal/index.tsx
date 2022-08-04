import { Transition } from "@headlessui/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import cx from "classnames";
import React, { Fragment, useState } from "react";
import { AudioPlayerModal } from "@components/audioplayer";
import { IPrayerData } from "@src/data/type";
import ReactPlayer from "react-player";
import { AudioPlayerModal2 } from "@components/audioplayer/playerCard2";

interface Props {
  title: string;
  preparation?: string[];
  audioModalData?: IPrayerData[];
  isVedio?: boolean;
  isAudio?: boolean;
  rakats?: {
    rakat: string;
  }[];
}


const PrayerDetails = ({
  audioModalData,
}: {
  audioModalData: IPrayerData[];
}) => { 
  
  return (
    <DialogPrimitive.Description className="space-y-3 mx-auto flex justify-center font-normal text-gray-700">
      <div className="flex flex-col justify-center w-[min(300px,100%)]  gap-4">
        {audioModalData.map((value, i) => {
          return (
            <>
              <AudioPlayerModal key={i} prayerRecord={value} />
            </>
          );
        })}
      </div>
    </DialogPrimitive.Description>
  );
};

const PrayerPreparationDetails = ({
  preparation,
}: {
  preparation: string[];
}) => { 
  console.log("ffffff",preparation)
  return (
    <DialogPrimitive.Description className="mt-4 space-y-3  font-normal text-gray-700">
      {preparation.map((data, i) => (
        <p key={i} className="text-[1.7rem]">
          {data}
        </p>
      ))}
    </DialogPrimitive.Description>
  );
};

const WuduInstructionVedio = ({ url }: { url: string }) => {
  return (
    <DialogPrimitive.Description className="space-y-3 rounded-xl mt-6  overflow-hidden aspect-w-16 aspect-h-9  font-normal text-gray-700">
      <ReactPlayer url={url} height="100%" width="100%" controls={false} />
    </DialogPrimitive.Description>
  );
};

const IqamaAudio = ({
  preparation,
}: {
  preparation: string[];
}) => {

  return (
    <DialogPrimitive.Description className="rounded-xl  overflow-hidden  font-normal text-gray-700">
      <h2 className="text-4xl font-bold text-center relative top-5">Iqamah(Men Only)</h2>
      <br></br>
      <p className="text-1xl  relative top-5" >
      In Islam men are ordered to pray the obligatory prayers in congregation (i.e, to pray with a group of men). 
      However, if a man prays alone then he should recite the iqamah before starting to pray. 
      The iqamah is a shorter version of the Athan.
      <br></br>
      <br></br>
      Click on the audio below to listen to the iqamah.</p>
      <ReactPlayer

        url="/audio/iqama.mp4"
        width="100%"
        height="150px"
        prepration={preparation}
        controls
        pip={false}
        config={{
          file: {
            forceAudio: true,
          },
        }}
      />
    </DialogPrimitive.Description>
  );
};

const PrayerDetailsTrigger = ({ title }: { title: string }) => {
  return (
    <DialogPrimitive.Trigger asChild>
      <button className="shadow-lg w-[250px] mx-auto border-2 border-[#42ABAE] text-center transition-colors py-5 hover:bg-[#42ABAE] text-white/90 font-semibold uppercase text-sm">
        {title}
        {console.log("tttt",title)}
      </button>
    </DialogPrimitive.Trigger>
  );
};

const PrayerPreparationDetailsTrigger = ({ title }: { title: string }) => {
  return (
    <DialogPrimitive.Trigger asChild>
      <button className="py-6 px-1 text-2xl bg-primary hover:bg-primary/90 rounded-xl w-full sm:w-[200px] shrink-0">
        <h4 className="text-gradient bg-gradient-to-r from-[#aed6f1] to-[#5499c7] ">
          {title}
        </h4>
      </button>
    </DialogPrimitive.Trigger>
  );
};

export const Modal = ({
  title,
  preparation,
  rakats,
  audioModalData,
  isVedio,
  isAudio,
  isAthan,
}: any) => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <DialogPrimitive.Root open={isOpen} modal={true} onOpenChange={setIsOpen}>
      {preparation && <PrayerPreparationDetailsTrigger title={title} />}
      {rakats && <PrayerDetailsTrigger title={title} />}
      <DialogPrimitive.Portal forceMount>
        <Transition.Root show={isOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogPrimitive.Overlay
              forceMount
              className="fixed inset-0 z-20 bg-black/50"
            />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPrimitive.Content
              forceMount
              className={cx(
                "fixed z-50",
                "w-[95vw]  rounded-3xl p-4  mx-auto",
                isVedio ? "max-w-screen-sm" : "max-w-md",
                "top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
                "bg-gradient-to-tr from-[#E3FDF5] to-[#FFE6FA]",
                "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              )}
            >
              {preparation &&
                (isVedio ? (
                  <WuduInstructionVedio url="https://youtu.be/2ZlQAUYghJk" />
                ) : isAudio ? (
                  <IqamaAudio preparation={preparation} />
                ) : isAthan ?(<AudioPlayerModal2 prayerRecord={"s"}/>):
                 (
                  <PrayerPreparationDetails preparation={preparation} />
                ))}

              {audioModalData && (
                <>
                  <DialogPrimitive.Title className="text-2xl font-semibold text-gray-600 mb-2">
                    Select
                  </DialogPrimitive.Title>
                  <PrayerDetails audioModalData={audioModalData} />
                </>
              )}
              <DialogPrimitive.Close
                className={cx(
                  "absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1",
                  "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                )}
              >
                <Cross1Icon className="h-4 w-4 text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400" />
              </DialogPrimitive.Close>
            </DialogPrimitive.Content>
          </Transition.Child>
        </Transition.Root>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};
