import React, { useState } from "react";
import styles from "../styles/AdminPanel.module.css";

type Match = {
  id: number;
  date: string;
  time: string;
  location: string;
  maxParticipants: number;
};

const initialMatches: Match[] = [
  {
    id: 1,
    date: "2025-01-10",
    time: "18:00",
    location: "Campo Sportivo Centro",
    maxParticipants: 10,
  },
  {
    id: 2,
    date: "2025-01-12",
    time: "20:00",
    location: "Stadio Comunale",
    maxParticipants: 10,
  },
];

const AdminPanel: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>(initialMatches);
  const [newMatch, setNewMatch] = useState<Match>({
    id: 0,
    date: "",
    time: "",
    location: "",
    maxParticipants: 10,
  });

  const handleAddMatch = () => {
    setMatches([...matches, { ...newMatch, id: matches.length + 1 }]);
    setNewMatch({ id: 0, date: "", time: "", location: "", maxParticipants: 10 });
  };

  const handleDeleteMatch = (id: number) => {
    setMatches(matches.filter((match) => match.id !== id));
  };

  return (
    <div className={styles.adminPanelContainer}>
      <h1>Pannello di Amministrazione</h1>

      <div className={styles.formSection}>
        <h2>Crea Nuova Partita</h2>
        <label>
          Data:
          <input
            type="date"
            value={newMatch.date}
            onChange={(e) => setNewMatch({ ...newMatch, date: e.target.value })}
          />
        </label>
        <label>
          Orario:
          <input
            type="time"
            value={newMatch.time}
            onChange={(e) => setNewMatch({ ...newMatch, time: e.target.value })}
          />
        </label>
        <label>
          Luogo:
          <input
            type="text"
            value={newMatch.location}
            onChange={(e) => setNewMatch({ ...newMatch, location: e.target.value })}
          />
        </label>
        <label>
          Numero Massimo di Partecipanti:
          <input
            type="number"
            value={newMatch.maxParticipants}
            onChange={(e) =>
              setNewMatch({ ...newMatch, maxParticipants: Number(e.target.value) })
            }
          />
        </label>
        <button onClick={handleAddMatch} className={styles.addButton}>
          Aggiungi Partita
        </button>
      </div>

      <div className={styles.matchList}>
        <h2>Lista Partite</h2>
        {matches.map((match) => (
          <div key={match.id} className={styles.matchCard}>
            <h3>{match.location}</h3>
            <p>
              <strong>Data:</strong> {match.date}
            </p>
            <p>
              <strong>Orario:</strong> {match.time}
            </p>
            <p>
              <strong>Partecipanti Massimi:</strong> {match.maxParticipants}
            </p>
            <button
              onClick={() => handleDeleteMatch(match.id)}
              className={styles.deleteButton}
            >
              Elimina
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
