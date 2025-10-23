export default function EventoCard() {
	return (
		<div className="w-[415px] h-[320px] flex flex-col rounded-[5px] bg-white border shadow-sm overflow-hidden cursor-pointer">
			<div className="bg-amber-400 w-full flex-1 min-h-0" />

			<div className="flex-none flex flex-col gap-[5px] p-[10px]">
				<div className="font-bold">Grupo de Estudo Bíblico</div>
				<div className="text-sm" style={{ color: "var(--text-muted)" }}>
					Data: 14 de Novembro de 2025
				</div>
				<div className="text-sm" style={{ color: "var(--text-muted)" }}>
					Horário: 20:00
				</div>
				<div className="text-sm" style={{ color: "var(--text-muted)" }}>
					Local: Catedral
				</div>
			</div>
		</div>
	);
}
