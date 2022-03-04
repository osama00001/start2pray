import cx from "classnames";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const navLinks = [
  { url: "#hero", label: "Home" },
  { url: "#prayers_preparation", label: "Preparation of prayers" },
  { url: "#About us", label: "About us" },
  { url: "#contact", label: "Contact us" },
];

interface IMenuButton {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuButton = ({ isOpen, setIsOpen }: IMenuButton) => {
  return (
    <div className="cursor-pointer lg:hidden z-10">
      <button
        className="border-2 relative border-white w-[50px] h-[50px] rounded-full"
        onClick={() => setIsOpen((state) => !state)}
      >
        <div
          className={cx(
            "relative transition-all duration-500 left-3 -top-[7px] w-6 h-[2px] bg-white",
            {
              "top-[0px]": isOpen,
            }
          )}
        />
        <div
          className={
            "relative transition-all duration-500 left-3 w-6 h-[2px] bg-white"
          }
        />
        <div
          className={cx(
            "relative transition-all duration-500 left-3 top-[7px] w-6 h-[2px] bg-white",
            {
              "-top-[2px]": isOpen,
            }
          )}
        />
      </button>
    </div>
  );
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [changeBg, setChangeBg] = useState(false);

  useEffect(() => {
    const handleScroll = (e: any) => {
      if (window.scrollY > 200) {
        setChangeBg(true);
      } else {
        setChangeBg(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <div
      className={cx("fixed top-0 z-10  inset-x-0 ", {
        "bg-primary": changeBg,
      })}
    >
      <header className="flex h-[80px]  justify-between items-center max-w-[1200px] px-5 mx-auto ">
        <span className="text-2xl md:text-3xl uppercase font-semibold text-secondary select-none cursor-pointer">
          start2pray.com
        </span>

        <MenuButton setIsOpen={setIsOpen} isOpen={isOpen} />

        <nav
          className={cx(
            "transition-all duration-500 fixed top-0 lg:static -right-full",
            {
              "right-[0px]": isOpen,
            }
          )}
        >
          <ul className="flex flex-col items-center justify-center lg:flex-row bg-[#1f1e1e] lg:bg-transparent w-screen lg:w-max  h-screen lg:h-max  gap-8 uppercase">
            {navLinks.map((link, i) => (
              <li
                key={i}
                className={cx(
                  "text-white/90 text-xl hover:text-white/80 active:text-white/90",
                  {
                    "outline outline-offset-[6px]  outline-white/90 hover:outline-white/80 active:outline-white/90 outline-2 rounded-sm text-lg":
                      link.label === "Contact us",
                  }
                )}
              >
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};
