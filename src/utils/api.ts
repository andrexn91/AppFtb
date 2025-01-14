// Funzioni simulate per gestire le partite e le prenotazioni
type Match = {
    id: number;
    date: string;
    time: string;
    location: string;
    participants: number;
    maxParticipants: number;
    description?: string;
  };
  
  let matchData: Match[] = [
    {
      id: 1,
      date: "2025-01-10",
      time: "18:00",
      location: "Campo Sportivo Centro",
      participants: 8,
      maxParticipants: 10,
      description: "Partita amichevole aperta a tutti i livelli.",
    },
    {
      id: 2,
      date: "2025-01-12",
      time: "20:00",
      location: "Stadio Comunale",
      participants: 5,
      maxParticipants: 10,
      description: "Partita serale per giocatori esperti.",
    },
  ];
  
  // Simula il recupero di tutte le partite
  export const getMatches = async (): Promise<Match[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(matchData), 500); // Simula un ritardo di rete
    });
  };
  
  // Simula il recupero di una partita specifica
  export const getMatchById = async (id: number): Promise<Match | undefined> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(matchData.find((match) => match.id === id)), 500);
    });
  };
  
  // Simula l'aggiunta di una nuova partita
  export const addMatch = async (newMatch: Match): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        matchData.push({ ...newMatch, id: matchData.length + 1 });
        resolve();
      }, 500);
    });
  };
  
  // Simula l'eliminazione di una partita
  export const deleteMatch = async (id: number): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        matchData = matchData.filter((match) => match.id !== id);
        resolve();
      }, 500);
    });
  };
  
  // Simula la prenotazione di un posto in una partita
  export const bookMatch = async (id: number): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const match = matchData.find((match) => match.id === id);
        if (match && match.participants < match.maxParticipants) {
          match.participants += 1;
          resolve();
        } else {
          reject("Impossibile prenotare: partita piena o non trovata.");
        }
      }, 500);
    });
  };
  