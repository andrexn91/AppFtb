import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Match } from "../types/match";
import { getMatchById, bookMatch } from "../utils/api";
import styles from "../styles/MatchDetails.module.css";


const MatchDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const [match, setMatch] = useState<Match | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Recupera i dettagli della partita dall'API simulata
    const fetchMatch = async () => {
      if (id) {
        try {
          const data = await getMatchById(Number(id));
          if (data) {
            setMatch(data);
          } else {
            setError("Partita non trovata.");
          }
          setLoading(false);
        } catch (err) {
          setError("Errore nel caricamento dei dettagli della partita.");
          setLoading(false);
        }
      }
    };
    fetchMatch();
  }, [id]);

  const handleBooking = async () => {
    if (!match) return;

    try {
      await bookMatch(match.id);
      setMatch({ ...match, participants: match.participants + 1 });
      alert("Prenotazione effettuata con successo!");
    } catch (err) {
      alert("Errore nella prenotazione: " + err);
    }
  };

  if (loading) {
    return <p>Caricamento dettagli della partita in corso...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!match) {
    return <p>Partita non trovata.</p>;
  }

  return (
    <div className={styles.detailsContainer}>
      <h1>Dettagli Partita</h1>
      <div className={styles.detailsCard}>
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
        <p>
          <strong>Descrizione:</strong> {match.description}
        </p>
        <button
          className={styles.joinButton}
          disabled={match.participants >= match.maxParticipants}
          onClick={handleBooking}
        >
          {match.participants >= match.maxParticipants ? "Partita Piena" : "Prenotati"}
        </button>
      </div>
    </div>
  );
};

export default MatchDetails;
