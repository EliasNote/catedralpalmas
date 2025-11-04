"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, Transition } from "framer-motion";
import NavbarOptions from "./NavbarOptions";
import { NAV_OPTIONS } from "@/constants";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const springTransition: Transition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
  };

  useEffect(() => {
    if (pathname !== "/") return;
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isShrunk = pathname === "/" && scrolled;

  return (
    <motion.nav
      animate={{
        backgroundColor: menuOpen
          ? "rgba(255,255,255,1)"
          : isShrunk
            ? "rgba(255, 255, 255, 1)"
            : "rgba(0, 0, 0, 0.05)",
        paddingBlock: isShrunk ? "6px" : "20px",
      }}
      transition={springTransition}
      className="fixed left-0 right-0 z-100 w-full"
    >
      <motion.div
        className="mx-auto flex items-center w-full justify-between lg:justify-center gap-3 px-10"
        animate={{
          color: isShrunk ? "rgba(0, 0, 0, 1)" : "rgba(255, 255, 255, 1)",
        }}
      >
        <motion.div
          animate={{
            maxWidth: isShrunk ? "70px" : "90px",
          }}
          className="flex items-center"
        >
          <Link href="/">
            <Image
              src="/brasao.png"
              alt="Brasão"
              width={88}
              height={88}
              quality={100}
              className="rounded-full mx-1.5 w-full h-full"
            />
          </Link>
        </motion.div>
        <NavbarOptions
          options={NAV_OPTIONS}
          springTransition={springTransition}
          className="hidden lg:block"
        />
        <button
          className="lg:hidden cursor-pointer w-14 h-14 bg-white/25 hover:bg-white/50 rounded-full flex items-center justify-center"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                transition={{ duration: 0.25 }}
              >
                <FiX size={28} className="text-black" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ opacity: 0, rotate: 90, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -90, scale: 0.7 }}
                transition={{ duration: 0.25 }}
              >
                <FiMenu
                  size={28}
                  className={menuOpen || isShrunk ? "text-black" : "text-white"}
                />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full h-screen bg-transparent shadow-lg z-50"
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
            <NavbarOptions
              options={NAV_OPTIONS}
              springTransition={springTransition}
              className="flex flex-col items-center gap-4 py-4"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
