import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/MatchDetails.module.css";

type Match = {
  id: number;
  date: string;
  time: string;
  location: string;
  participants: number;
  maxParticipants: number;
  description: string;
};

const matchData: Match[] = [
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

const MatchDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const match = matchData.find((m) => m.id === Number(id));

  if (!match) {
    return <p>Partita non trovata.</p>;
  }

  const handleJoin = () => {
    if (match.participants < match.maxParticipants) {
      alert(`Ti sei prenotato alla partita ID: ${match.id}`);
      // Qui si può aggiungere una chiamata API per salvare la prenotazione
    }
  };

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
          onClick={handleJoin}
        >
          {match.participants >= match.maxParticipants ? "Partita Piena" : "Prenotati"}
        </button>
      </div>
    </div>
  );
};

export default MatchDetails;
