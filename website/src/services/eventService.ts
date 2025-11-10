import { supabase } from "@/lib/supabase";
import { EventWithRelations, Location, LocationName } from "@/types/content";

export class EventService {
	static async getEvents(): Promise<EventWithRelations[]> {
		const { data, error } = await supabase
			.from("event")
			.select(
				`
        *,
        type:type(name, id),
        location:location(name, id)
      `
			)
			.order("date", { ascending: true })
			.order("time", { ascending: true });

		if (error) {
			console.error("Error fetching events:", error);
			throw error;
		}

		return data as EventWithRelations[];
	}

	static groupEventsByLocation(events: EventWithRelations[]): Location[] {
		const locationsMap = new Map<string, Location>();

		events.forEach((event) => {
			const locationName = event.location.name as LocationName;

			if (!locationsMap.has(locationName)) {
				locationsMap.set(locationName, {
					id: event.location.id,
					name: locationName,
					events: [],
				});
			}

			const location = locationsMap.get(locationName)!;
			location.events.push(event);
		});

		return Array.from(locationsMap.values());
	}
}
