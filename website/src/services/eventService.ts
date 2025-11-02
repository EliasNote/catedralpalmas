import { supabase } from "@/lib/supabase";
import { EventWithRelations } from "@/types/supabase";
import { ScheduleEvent, Location } from "@/types/content";

export class EventService {
  static async getEvents(): Promise<EventWithRelations[]> {
    const { data, error } = await supabase
      .from("event")
      .select(
        `
        *,
        type:type(name, id),
        location:location(name, id)
      `,
      )
      .order("date", { ascending: true })
      .order("time", { ascending: true });

    if (error) {
      console.error("Error fetching events:", error);
      throw error;
    }

    return data as EventWithRelations[];
  }

  static async getEventsByLocation(
    locationId: string,
  ): Promise<EventWithRelations[]> {
    const { data, error } = await supabase
      .from("event")
      .select(
        `
        *,
        type:type(name, id),
        location:location(name, id)
      `,
      )
      .eq("location", locationId)
      .order("date", { ascending: true })
      .order("time", { ascending: true });

    if (error) {
      console.error("Error fetching events by location:", error);
      throw error;
    }

    return data as EventWithRelations[];
  }

  static async getEventsByDateRange(
    startDate: string,
    endDate: string,
  ): Promise<EventWithRelations[]> {
    const { data, error } = await supabase
      .from("event")
      .select(
        `
        *,
        type:type(name, id),
        location:location(name, id)
      `,
      )
      .gte("date", startDate)
      .lte("date", endDate)
      .order("date", { ascending: true })
      .order("time", { ascending: true });

    if (error) {
      console.error("Error fetching events by date range:", error);
      throw error;
    }

    return data as EventWithRelations[];
  }

  static async getLocations(): Promise<{ id: string; name: string }[]> {
    const { data, error } = await supabase
      .from("location")
      .select("id, name")
      .order("name", { ascending: true });

    if (error) {
      console.error("Error fetching locations:", error);
      throw error;
    }

    return data || [];
  }

  static async getEventTypes(): Promise<{ id: string; name: string }[]> {
    const { data, error } = await supabase
      .from("type")
      .select("id, name")
      .order("name", { ascending: true });

    if (error) {
      console.error("Error fetching event types:", error);
      throw error;
    }

    return data || [];
  }

  static convertToScheduleEvent(event: EventWithRelations): ScheduleEvent {
    // Parse 'YYYY-MM-DD' as a local date to avoid timezone shifts
    const [yearStr, monthStr, dayStr] = event.date.split("-");
    const year = Number(yearStr);
    const month = Number(monthStr);
    const day = Number(dayStr);
    const localDate = new Date(year, (month || 1) - 1, day || 1);
    localDate.setHours(0, 0, 0, 0);

    return {
      id: event.id,

      title: event.title || undefined,

      date: localDate,
      time: event.time,
      type: event.type.name as any,

      location: event.location.name,

      imageUrl: event.image_url || undefined,

      descricao: event.descricao || undefined,
    };
  }

  static groupEventsByLocation(events: EventWithRelations[]): Location[] {
    const locationsMap = new Map<string, Location>();

    events.forEach((event) => {
      const locationName = event.location.name as any;

      if (!locationsMap.has(locationName)) {
        locationsMap.set(locationName, {
          id: event.location.id,
          name: locationName,
          events: [],
        });
      }

      const location = locationsMap.get(locationName)!;
      location.events.push(this.convertToScheduleEvent(event));
    });

    return Array.from(locationsMap.values());
  }
}
