"use client";
import Image from "next/image";
import { AnimatePresence, motion, Transition } from "framer-motion";
import NavbarOptions from "./NavbarOptions";
import { NAV_OPTIONS } from "@/constants";

export default function NavbarMobile({
  springTransition,
  menuOpen,
  setMenuOpen,
}: {
  springTransition: Transition;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          className="absolute top-full left-0 w-full h-screen bg-transparent shadow-lg z-50 flex flex-col items-center"
          initial={{
            opacity: 0,
            backgroundColor: "rgba(255,255,255,0)",
          }}
          animate={{
            opacity: 1,
            backgroundColor: "rgba(255,255,255,1)",
          }}
          exit={{
            opacity: 0,
            backgroundColor: "rgba(255,255,255,0)",
          }}
          transition={springTransition}
        >
          <Image
            src="/brasao.png"
            alt="Brasão"
            width={110}
            height={110}
            quality={100}
            className={`rounded-full w-[110px] h-[110px] ${!menuOpen && "hidden"}`}
          />
          <NavbarOptions
            options={NAV_OPTIONS}
            springTransition={springTransition}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
