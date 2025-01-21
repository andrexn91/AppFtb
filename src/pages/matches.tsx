import React, { useEffect, useState } from "react";
import { getMatches, bookMatch } from "../utils/api";
import { Match } from "../types/match";
import styles from "../styles/MatchesPage.module.css";

const MatchesPage: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isBooking, setIsBooking] = useState<boolean>(false); // Stato per evitare chiamate multiple

  useEffect(() => {
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
    if (isBooking) return; // Evita chiamate multiple

    setIsBooking(true);

    try {
      const updatedMatches = await bookMatch(id); // Ricevi l'elenco aggiornato dall'API
      setMatches(updatedMatches); // Aggiorna lo stato con i dati restituiti dall'API
      alert("Prenotazione effettuata con successo!");
    } catch (err) {
      alert("Errore nella prenotazione: " + err);
    } finally {
      setIsBooking(false);
    }
  };

  if (loading) {
    return <p>Caricamento partite in corso...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.matchesPage}>
      <h1>Lista Partite</h1>
      <p>Trova una partita e prenota il tuo posto!</p>

      <div className={styles.matchList}>
        {matches.map((match) => (
          <div
            key={match.id}
            className={`${styles.matchCard} ${
              match.participants >= match.maxParticipants ? styles.fullMatch : ""
            }`}
          >
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
              disabled={
                isBooking || match.participants >= match.maxParticipants
              }
              onClick={() => handleBooking(match.id)}
            >
              {match.participants >= match.maxParticipants ? "Partita Piena" : "Prenotati"}
            </button>
          </div>
        ))}
        {matches.length === 0 && <p>Non ci sono partite disponibili al momento.</p>}
      </div>
    </div>
  );
};

export default MatchesPage;
