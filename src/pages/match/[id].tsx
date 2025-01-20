import React from "react";
import { useRouter } from "next/router";

const MatchDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Dettagli della Partita</h1>
      <p>ID della partita: {id}</p>
    </div>
  );
};

export default MatchDetails; // Default export
