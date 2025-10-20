"use client";

import Image from "next/image";

export default function Home() {
	return (
		<section>
			<div
				className="relative flex w-full"
				style={{ height: "calc(100vh + 10vh)" }}
			>
				<Image
					src="/hero1.png"
					alt="Brasão"
					width={640}
					height={1080}
					className="object-cover"
					style={{ height: "100%" }}
				/>
				<Image
					src="/hero2.png"
					alt="Brasão"
					width={640}
					height={1080}
					className="object-cover"
					style={{ height: "100%" }}
				/>
				<Image
					src="/hero3.png"
					alt="Brasão"
					width={640}
					height={1080}
					className="object-cover"
					style={{ height: "100%" }}
				/>
				{/* Noise overlay SVG */}
				<svg className="pointer-events-none absolute inset-0 w-full h-full z-10">
					<filter id="grain">
						<feTurbulence
							type="fractalNoise"
							baseFrequency="0.9"
							numOctaves="4"
							result="noise"
						/>
						<feColorMatrix in="noise" type="saturate" values="0" />
						<feFlood floodColor="#000000" result="color" />
						<feComposite
							in="color"
							in2="noise"
							operator="in"
							result="colored"
						/>
					</filter>
					<rect
						width="100%"
						height="100%"
						filter="url(#grain)"
						opacity="0.45"
					/>
				</svg>
			</div>
		</section>
	);
}
