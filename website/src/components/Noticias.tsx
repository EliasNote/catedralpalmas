import { Noticia } from "@/app/page";
import NoticiaComponent from "./Noticias/Noticia";

export default function Noticias({ noticias }: { noticias: Noticia[] }) {
	return (
		<>
			<div className="font-big-shoulders">
				<h2>Notícias</h2>
				<div className="flex max-w-[1280px] w-full gap-[20px] m-auto">
					<NoticiaComponent noticia={noticias[0]} width={600} length={600} />
					<div className="flex flex-col gap-[20px]">
						<NoticiaComponent noticia={noticias[1]} width={660} length={290} />
						<div className="flex gap-[20px]">
							<NoticiaComponent
								noticia={noticias[2]}
								width={320}
								length={290}
							/>
							<NoticiaComponent
								noticia={noticias[3]}
								width={320}
								length={290}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
