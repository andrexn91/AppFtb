export type Match = {
    id: number;
    date: string;
    time: string;
    location: string;
    participants: number;
    maxParticipants: number;
    registeredUsers: string[]; // Nomi degli utenti registrati
    description?: string; // Mantieni description opzionale
  };
  