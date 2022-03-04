import { Transition } from "@headlessui/react";
import Link from "next/link";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import cx from "classnames";
import React, { Fragment, useState } from "react";

interface Props {
  title: string;
  preparation?: string[];
  rakats?: {
    rakat: string;
    url: string;
  }[];
}

const PrayerDetails = ({
  rakats,
}: {
  rakats: { rakat: string; url: string }[];
}) => {
  return (
    <DialogPrimitive.Description className="space-y-3  font-normal text-gray-700">
      <div className="flex flex-col items-center gap-4">
        {rakats.map(({ rakat, url }, i) => (
          <Link key={i} href={url}>
            <a className="bg-gradient-to-r from-[#aed6f1] to-[#5499c7]  hover:to-[#5499c7]/80 self-center py-2 w-[min(300px,100%)] rounded-lg text-white font-bold text-center">
              {rakat}
            </a>
          </Link>
        ))}
      </div>
    </DialogPrimitive.Description>
  );
};

const PrayerPreparationDetails = ({
  preparation,
}: {
  preparation: string[];
}) => {
  return (
    <DialogPrimitive.Description className="mt-4 space-y-3  font-normal text-gray-700">
      {preparation.map((data, i) => (
        <p key={i} className="text-[1rem]">
          {data}
        </p>
      ))}
    </DialogPrimitive.Description>
  );
};

const PrayerDetailsTrigger = ({ title }: { title: string }) => {
  return (
    <DialogPrimitive.Trigger asChild>
      <button className="shadow-lg w-full text-center transition-colors py-5 hover:bg-[#42ABAE] text-white/90 font-semibold uppercase text-sm">
        <span className="shadow-lg w-full text-center transition-colors py-5 hover:bg-[#42ABAE] text-white/90 font-semibold uppercase text-sm">
          {title}
        </span>
      </button>
    </DialogPrimitive.Trigger>
  );
};

const PrayerPreparationDetailsTrigger = ({ title }: { title: string }) => {
  return (
    <DialogPrimitive.Trigger asChild>
      <button className="py-6 px-1 text-3xl bg-primary hover:bg-primary/90 rounded-xl w-full sm:w-[200px] grow shrink-0">
        <span className="text-gradient bg-gradient-to-r from-[#aed6f1] to-[#5499c7] ">
          {title}
        </span>
      </button>
    </DialogPrimitive.Trigger>
  );
};

export const Modal = ({ title, preparation, rakats }: Props) => {
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
                "w-[95vw] max-w-md rounded-3xl p-4 md:w-full",
                "top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
                "bg-gradient-to-tr from-[#E3FDF5] to-[#FFE6FA]",
                "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              )}
            >
              {preparation && (
                <PrayerPreparationDetails preparation={preparation} />
              )}
              {rakats && (
                <>
                  <DialogPrimitive.Title className="text-2xl font-semibold text-gray-600 mb-2">
                    Select
                  </DialogPrimitive.Title>{" "}
                  <PrayerDetails rakats={rakats} />
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
