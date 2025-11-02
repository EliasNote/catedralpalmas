import { Location } from "@/types";

// Este arquivo serve como fallback caso o Supabase não esteja disponível
// Os dados reais devem vir do banco de dados via EventService
export const LOCATIONS: Location[] = [];

// Helper para obter locations do Supabase
// Use EventService.getLocations() e EventService.groupEventsByLocation()
// para obter os dados atualizados do banco de dados
