import cx from "classnames";
import { Dispatch, SetStateAction, useEffect, useState} from "react";
import { Dropdown } from "react-bootstrap";


const navLinks = [
  { url: "#hero", label: "Home" },
  { url: "#prayers_preparation", label: "Preparation of prayers" },
  { url: "#Introduction", label: "Introduction" },
  { url: "#contact", label: "Contact us" },

  { url: "#simplifiedSalah", label: "Prayer" }
  
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
      className={cx("fixed top-0 z-10 left-0 w-screen ", {
        "bg-primary": changeBg,
      })}
    >
      <header className="flex h-[80px] justify-between  items-center max-w-[1200px] px-5 mx-auto">
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
          <div className="bg-[#1f1e1e] grid place-content-center lg:bg-transparent w-screen lg:w-max  h-screen lg:h-max uppercase">
            <ul className="grid grid-flow-row md:grid-flow-col gap-y-8 gap-x-5 items-center justify-center">
              {navLinks.map((link, i) => (
                <li
                  key={i}
                  onClick={() => setIsOpen(false)}
                  className={cx(
                    "text-white/90  md:w-auto text-center hover:text-white/80 active:text-white/90 outline md:outline-none outline-offset-[6px]  outline-white/90 hover:outline-white/80 active:outline-white/90 outline-2 rounded-sm text-lg transition-all"
                  )}
                > 
                  <a href={link.url} className="w-[min(300px,100%)]  h-full">
                    {link.label}
                  </a>
                  
                </li>
              ))}
            </ul>
            
          </div>
        
        </nav>
        
      </header>
    </div>
  );
};
