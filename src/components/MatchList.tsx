import React, { useEffect, useState } from "react";
import { getMatches, bookMatch } from "../utils/api";
import styles from "../styles/MatchList.module.css";

type Match = {
  id: number;
  date: string;
  time: string;
  location: string;
  participants: number;
  maxParticipants: number;
};

const MatchList: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Recupera le partite dall'API simulata
    const fetchMatches = async () => {
      try {
        const data = await getMatches();
        setMatches(data);
        setLoading(false);
      } catch (err) {
        setError("Errore nel caricamento delle partite.");
        setLoading(false);
      }
    };
    fetchMatches();
  }, []);

  const handleBooking = async (id: number) => {
    try {
      await bookMatch(id);
      setMatches((prevMatches) =>
        prevMatches.map((match) =>
          match.id === id
            ? { ...match, participants: match.participants + 1 }
            : match
        )
      );
      alert("Prenotazione effettuata con successo!");
    } catch (err) {
      alert("Errore nella prenotazione: " + err);
    }
  };

  if (loading) {
    return <p>Caricamento partite in corso...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.matchListContainer}>
      <h1>Partite Disponibili</h1>
      <div className={styles.matchList}>
        {matches.map((match) => (
          <div key={match.id} className={styles.matchCard}>
            <h2>{match.location}</h2>
            <p>
              <strong>Data:</strong> {match.date}
            </p>
            <p>
              <strong>Orario:</strong> {match.time}
            </p>
            <p>
              <strong>Partecipanti:</strong> {match.participants}/{match.maxParticipants}
            </p>
            <button
              className={styles.joinButton}
              disabled={match.participants >= match.maxParticipants}
              onClick={() => handleBooking(match.id)}
            >
              {match.participants >= match.maxParticipants ? "Partita Piena" : "Prenotati"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchList;
