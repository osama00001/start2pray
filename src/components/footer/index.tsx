import { ArrowUpIcon } from "@radix-ui/react-icons";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr pb-3 from-[#29323c] to-[#485563] h-[250px]">
      <div className="w-[min(500px,100%-30px)] mx-auto flex flex-col items-center justify-between  h-full">
        <div className="mt-10">
          <p className="text-2xl text-center md:text-3xl uppercase font-semibold text-secondary select-none cursor-pointer">
            Start2pray.com
          </p>
          <p className="text-gray-200 text-center text-lg">
            Complete Online Salah Solution
          </p>
        </div>
        <a href="#hero" className="bg-gray-900 animate-bounce p-3 rounded-full">
          <ArrowUpIcon color="#fff" width={30} height={30} />
        </a>
        <small className="text-gray-200 text-center">
          Copyright © 2022 Islamic Information Center Sultan Qaboos Grand
          Mosque, Muscat. All rights reserved
        </small>
      </div>
    </footer>
  );
};
