"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, Transition } from "framer-motion";

export default function Navbar() {
	const pathname = usePathname();
	const [scrolled, setScrolled] = useState(false);
	const navHeigth = 70;
	const springTransition: Transition = {
		type: "spring",
		stiffness: 300,
		damping: 30,
	};

	const navLeft = [
		{ href: "/", label: "Início" },
		{ href: "/eventos", label: "Eventos" },
		{ href: "/horarios", label: "Horários" },
		{ href: "/noticias", label: "Notícias" },
	];
	const navRight = [
		{ href: "/sobre", label: "Sobre" },
		{ href: "/galeria", label: "Galeria" },
		{ href: "/contato", label: "Contato" },
		{ href: "/oracoes", label: "Orações" },
	];

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
						boxShadow: isShrunk ? "0 8px 30px rgba(0,0,0,0.08)" : "none",
						backgroundColor: "#ffffff",
					}}
					transition={{
						...springTransition,
						boxShadow: { duration: 0.25 },
					}}
					style={{ maxWidth: "100%" }}
					className={`mx-auto h-[${navHeigth}px] flex items-center`}
				>
					<div className="w-full mx-auto flex items-center justify-center px-5">
						{navLeft.map(({ href, label }) => (
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

						<motion.div
							animate={{
								marginTop: isShrunk ? 0 : 20,
							}}
							transition={springTransition}
							className="flex-shrink-0 flex items-center"
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

						{navRight.map(({ href, label }) => (
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
					</div>
				</motion.div>
			</div>
		</motion.nav>
	);
}
