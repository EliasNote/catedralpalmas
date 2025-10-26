"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, Transition } from "framer-motion";
import NavbarOptions from "./NavbarOptions";
import { NAV_LEFT, NAV_RIGHT, NAV_HEIGHT } from "@/constants";

export default function Navbar() {
	const pathname = usePathname();
	const [scrolled, setScrolled] = useState(false);
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
			initial={false}
			animate={{ top: isShrunk ? 20 : 0 }}
			transition={springTransition}
			className="fixed left-0 right-0 z-50 pointer-events-none"
		>
			<div className="pointer-events-auto mx-auto">
				<motion.div
					animate={{
						width: isShrunk ? "max-content" : "100%",
						borderRadius: isShrunk ? 100 : 0,
						boxShadow: isShrunk ? "0 16px 300px rgba(0,0,0,0.05)" : "none",
						backgroundColor: "#ffffff",
					}}
					transition={{
						...springTransition,
						boxShadow: { duration: 0.25 },
					}}
					style={{
						maxWidth: "100%",
						height: `${NAV_HEIGHT}px`,
						overflow: "visible",
					}}
					className="mx-auto flex items-center border"
				>
					<div className="w-full mx-auto flex items-center justify-center px-5">
						<NavbarOptions
							options={NAV_LEFT}
							springTransition={springTransition}
						/>

						<motion.div
							initial={false}
							animate={{
								marginTop: isShrunk ? 0 : 20,
							}}
							transition={springTransition}
							className="flex items-center z-50"
							style={{ flexShrink: 0 }}
						>
							<Link href="/">
								<Image
									src="/brasao.png"
									alt="Brasão"
									width={88}
									height={88}
									quality={100}
									className="rounded-full mx-1.5"
								/>
							</Link>
						</motion.div>

						<NavbarOptions
							options={NAV_RIGHT}
							springTransition={springTransition}
						/>
					</div>
				</motion.div>
			</div>
		</motion.nav>
	);
}
