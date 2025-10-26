import Image from "next/image";

export default function Footer() {
	return (
		<section className="w-full mt-[-100px] flex flex-col items-center">
			<div className="max-w-[1280px] flex gap-3">
				<Image
					src="/brasao.png"
					alt="Brasão"
					width={200}
					height={200}
					quality={100}
					className="rounded-full"
				/>
				<div>
					<h3 className="text-xl font-bold">Catedral de Palmas PR</h3>
					<p>Rua Bispo Dom Carlos, 819, Sala 01 - Centro.</p>
					<p>Cx. Postal 50.</p>
					<p>85.690-025 - Palmas - PR</p>
					<p>Fone: 46. 3263 1134</p>
				</div>
				<div>
					<h3 className="text-xl font-bold">Atendimento</h3>
					<p>Segunda à sexta das 8:00hs às 12:00hs e das 13:15hs às 17:30hs.</p>
					<div className="space-y-2">
						<a href="#" className="block hover:text-gray-300">
							PORTAL DO COLABORADOR
						</a>
						<a href="#" className="block hover:text-gray-300">
							POLÍTICA DE PRIVACIDADE
						</a>
					</div>
				</div>
			</div>
			<div className="max-w-[1280px] m-auto mt-8 pt-4 border-t border-gray-700 text-sm text-gray-400 flex justify-between items-center">
				<p>
					© 2025 - Cúria Diocesana - Diocese de Palmas Francisco Beltrão - PR.
				</p>
				<div className="flex items-center gap-2">
					<span>Tecnologia:</span>
					<span>🎯</span>
				</div>
			</div>
		</section>
	);
}
