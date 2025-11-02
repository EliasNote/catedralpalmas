import { supabase } from '@/lib/supabase'
import { EventWithRelations } from '@/types/supabase'
import { ScheduleEvent, Location } from '@/types/content'

export class EventService {
  static async getEvents(): Promise<EventWithRelations[]> {
    const { data, error } = await supabase
      .from('event')
      .select(`
        *,
        type:type(name, id),
        location:location(name, id)
      `)
      .order('date', { ascending: true })
      .order('time', { ascending: true })

    if (error) {
      console.error('Error fetching events:', error)
      throw error
    }

    return data as EventWithRelations[]
  }

  static async getEventsByLocation(locationId: string): Promise<EventWithRelations[]> {
    const { data, error } = await supabase
      .from('event')
      .select(`
        *,
        type:type(name, id),
        location:location(name, id)
      `)
      .eq('location', locationId)
      .order('date', { ascending: true })
      .order('time', { ascending: true })

    if (error) {
      console.error('Error fetching events by location:', error)
      throw error
    }

    return data as EventWithRelations[]
  }

  static async getEventsByDateRange(startDate: string, endDate: string): Promise<EventWithRelations[]> {
    const { data, error } = await supabase
      .from('event')
      .select(`
        *,
        type:type(name, id),
        location:location(name, id)
      `)
      .gte('date', startDate)
      .lte('date', endDate)
      .order('date', { ascending: true })
      .order('time', { ascending: true })

    if (error) {
      console.error('Error fetching events by date range:', error)
      throw error
    }

    return data as EventWithRelations[]
  }

  static async getLocations(): Promise<{ id: string; name: string }[]> {
    const { data, error } = await supabase
      .from('location')
      .select('id, name')
      .order('name', { ascending: true })

    if (error) {
      console.error('Error fetching locations:', error)
      throw error
    }

    return data || []
  }

  static async getEventTypes(): Promise<{ id: string; name: string }[]> {
    const { data, error } = await supabase
      .from('type')
      .select('id, name')
      .order('name', { ascending: true })

    if (error) {
      console.error('Error fetching event types:', error)
      throw error
    }

    return data || []
  }

  static convertToScheduleEvent(event: EventWithRelations): ScheduleEvent {
    return {
      id: event.id,
      title: event.title || undefined,
      date: new Date(event.date),
      time: event.time,
      type: event.type.name as any,
      location: event.location.name,
      imageUrl: event.image_url || undefined,
      descricao: event.descricao || undefined
    }
  }

  static groupEventsByLocation(events: EventWithRelations[]): Location[] {
    const locationsMap = new Map<string, Location>()
    
    events.forEach(event => {
      const locationName = event.location.name as any
      
      if (!locationsMap.has(locationName)) {
        locationsMap.set(locationName, {
          id: event.location.id,
          name: locationName,
          events: []
        })
      }
      
      const location = locationsMap.get(locationName)!
      location.events.push(this.convertToScheduleEvent(event))
    })
    
    return Array.from(locationsMap.values())
  }
}