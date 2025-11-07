/**
 * Configuração de localização e timezone para o projeto
 */
export const LOCALE_CONFIG = {
	/** Locale padrão para formatação de datas */
	locale: "pt-BR",

	/** Timezone padrão (América/São Paulo = Brasília) */
	timeZone: "America/Sao_Paulo",
} as const;

/**
 * Função auxiliar para formatar datas
 */
export function formatDate(
	date: Date,
	options?: Intl.DateTimeFormatOptions
): string {
	return date.toLocaleDateString(LOCALE_CONFIG.locale, {
		day: "numeric",
		month: "long",
		year: "numeric",
		timeZone: LOCALE_CONFIG.timeZone,
		...options,
	});
}

/**
 * Função auxiliar para formatar data e hora
 */
export function formatDateTime(
	date: Date,
	options?: Intl.DateTimeFormatOptions
): string {
	return date.toLocaleDateString(LOCALE_CONFIG.locale, {
		day: "numeric",
		month: "long",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		timeZone: LOCALE_CONFIG.timeZone,
		...options,
	});
}
