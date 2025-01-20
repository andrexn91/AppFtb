import React, { useEffect, useState } from "react";
import { getMatches, addMatch, deleteMatch } from "../utils/api";
import styles from "../styles/AdminPanel.module.css";

type Match = {
  id: number;
  date: string;
  time: string;
  location: string;
  participants: number; //Aggiunto
  maxParticipants: number;
};

const AdminPanel: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [newMatch, setNewMatch] = useState<Match>({
    id: 0,
    date: "",
    time: "",
    location: "",
    participants: 0, //Riga aggiunta
    maxParticipants: 10,
  });

  useEffect(() => {
    // Recupera tutte le partite dall'API
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

  const handleAddMatch = async () => {
    try {
      await addMatch(newMatch);
      const updatedMatches = await getMatches();
      setMatches(updatedMatches);
      setNewMatch({ id: 0, date: "", time: "", location: "", participants: 0, maxParticipants: 10 });
      alert("Partita aggiunta con successo!");
    } catch (err) {
      alert("Errore nell'aggiunta della partita.");
    }
  };

  const handleDeleteMatch = async (id: number) => {
    try {
      await deleteMatch(id);
      const updatedMatches = await getMatches();
      setMatches(updatedMatches);
      alert("Partita eliminata con successo!");
    } catch (err) {
      alert("Errore nell'eliminazione della partita.");
    }
  };

  if (loading) {
    return <p>Caricamento partite in corso...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

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
