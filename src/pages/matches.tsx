import React, { useEffect, useState } from "react";
import MatchList from "../components/MatchList";
import styles from "../styles/MatchesPage.module.css";

const MatchesPage: React.FC = () => {
  return (
    <div className={styles.matchesPage}>
      <h1>Lista Partite</h1>
      <p>Trova una partita e prenota il tuo posto!</p>
      {/* Componente che mostra la lista delle partite */}
      <MatchList />
    </div>
  );
};

export default MatchesPage;

