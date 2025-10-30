import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function NewsButton({ hovered }: { hovered: boolean }) {
  return (
    <motion.button
      className="group bg-amber-500 px-6 cursor-pointer py-2 w-fit rounded text-white flex items-center justify-center gap-2 overflow-hidden"
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      Ler Notícia
      <motion.span
        animate={hovered ? { x: 8 } : { x: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="inline-block"
      >
        <ArrowRight className="w-5 h-5" />
      </motion.span>
    </motion.button>
  );
}
