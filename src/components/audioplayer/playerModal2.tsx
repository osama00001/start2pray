import { Transition } from "@headlessui/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import cx from "classnames";
import React, { Fragment, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  prayerName: string;
  title: string;
}

const AudioPlayerTrigger = ({ title }: { title: string }) => {
  return (
    <DialogPrimitive.Trigger asChild>
      <button className="bg-gradient-to-r from-[#aed6f1] to-[#5499c7]  hover:to-[#5499c7]/80 self-center py-2 w-[min(300px,100%)] rounded-lg text-white font-bold text-center">
        {title} 
      </button>
    </DialogPrimitive.Trigger>
  );
};

export const PlayerModal2 = ({ children, prayerName, title }: any) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <DialogPrimitive.Root open={isOpen} modal={true} onOpenChange={setIsOpen}>
      <AudioPlayerTrigger title={title} />
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
                "w-[95vw] max-w-md rounded-3xl p-4 md:w-full",
                "top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
                "bg-gradient-to-tr from-[#E3FDF5] to-[#FFE6FA]",
                "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              )}
            >
              <DialogPrimitive.Title>{prayerName}</DialogPrimitive.Title>
              {children}
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