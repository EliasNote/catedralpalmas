"use client";

import { motion, Transition } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavOption {
  readonly href: string;
  readonly label: string;
}

interface NavbarOptionsProps {
  options: readonly NavOption[];
  springTransition: Transition;
  menuOpen?: boolean;
  setMenuOpen?: (value: boolean) => void;
}

export default function NavbarOptions({
  options,
  springTransition,
  menuOpen,
  setMenuOpen,
}: NavbarOptionsProps) {
  const pathname = usePathname();

  return (
    <motion.div
      className={`lg:flex ${menuOpen ? "flex flex-col gap-2 items-center w-full h-full px-2 py-4" : "hidden gap-2 ml-4"}`}
      variants={
        menuOpen
          ? {
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }
          : undefined
      }
      initial={menuOpen ? "hidden" : undefined}
      animate={menuOpen ? "visible" : undefined}
    >
      {options.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`font-semibold px-[10px] lg:px-[14px] py-[8px] hover:bg-gray-300/80 max-h-fit cursor-pointer rounded-[2px]
        ${menuOpen && "max-w-sm w-full flex justify-center py-[12px] h-full items-center bg-gray-300/15"}
        ${pathname === href && menuOpen && "bg-gray-400/50"}
      `}
          onClick={() => {
            if (menuOpen && setMenuOpen) setMenuOpen(false);
          }}
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={springTransition}
          >
            {label}
          </motion.span>
        </Link>
      ))}
    </motion.div>
  );
}
