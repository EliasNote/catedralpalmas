import { motion, Transition } from "framer-motion";
import Link from "next/link";

type Option = {
	href: string;
	label: string;
};

export default function NavbarOptions({
	options,
	springTransition,
}: {
	options: Option[];
	springTransition: Transition;
}) {
	return (
		<>
			{options.map(({ href, label }) => (
				<motion.span
					key={href}
					whileHover={{
						backgroundColor: "#e4e4e4",
					}}
					transition={springTransition}
					className="px-[14px] py-[8px] cursor-pointer rounded-[2px]"
				>
					<Link href={href}>{label}</Link>
				</motion.span>
			))}
		</>
	);
}
