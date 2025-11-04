import { motion, Transition } from "framer-motion";
import Link from "next/link";

interface NavOption {
  readonly href: string;
  readonly label: string;
}

interface NavbarOptionsProps {
  options: readonly NavOption[];
  springTransition: Transition;
  className: string;
}

export default function NavbarOptions({
  options,
  springTransition,
  className,
}: NavbarOptionsProps) {
  return (
    <div className={`flex gap-2 ${className}`}>
      {options.map(({ href, label }) => (
        <motion.span
          key={href}
          whileHover={{
            backgroundColor: "#e4e4e4",
          }}
          transition={springTransition}
          className="px-[10px] lg:px-[14px] py-[8px] cursor-pointer rounded-[2px]"
        >
          <Link href={href} className="font-semibold">
            {label}
          </Link>
        </motion.span>
      ))}
    </div>
  );
}
