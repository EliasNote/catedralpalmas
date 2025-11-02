export interface Database {
  public: {
    Tables: {
      location: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
      }
      type: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
      }
      event: {
        Row: {
          id: string
          title: string | null
          date: string
          time: string
          type: string
          location: string
          image_url: string | null
          descricao: string | null
        }
        Insert: {
          id?: string
          title?: string | null
          date: string
          time: string
          type: string
          location: string
          image_url?: string | null
          descricao?: string | null
        }
        Update: {
          id?: string
          title?: string | null
          date?: string
          time?: string
          type?: string
          location?: string
          image_url?: string | null
          descricao?: string | null
        }
      }
    }
  }
}

export type EventWithRelations = {
  id: string
  title: string | null
  date: string
  time: string
  type: {
    id: string
    name: string
  }
  location: {
    id: string
    name: string
  }
  image_url: string | null
  descricao: string | null
}