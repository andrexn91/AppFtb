import React, { useState } from "react";
import styles from "../styles/Profile.module.css";

const Profile: React.FC = () => {
  const [username, setUsername] = useState("Nome Utente");
  const [role, setRole] = useState("Attaccante");
  const [photo, setPhoto] = useState("/images/default-avatar.png");

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = URL.createObjectURL(e.target.files[0]);
      setPhoto(file);
    }
  };

  const handleSave = () => {
    alert("Profilo salvato!");
    // Simula un'API call per salvare i dati
  };

  return (
    <div className={styles.profileContainer}>
      <h1>Il mio profilo</h1>
      <div className={styles.profileContent}>
        <div className={styles.photoSection}>
          <img src={photo} alt="Foto Profilo" className={styles.profilePhoto} />
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className={styles.fileInput}
          />
        </div>
        <div className={styles.infoSection}>
          <label>
            Nome utente:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={styles.inputField}
            />
          </label>
          <label>
            Ruolo preferito:
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className={styles.selectField}
            >
              <option value="Portiere">Portiere</option>
              <option value="Difensore">Difensore</option>
              <option value="Centrocampista">Centrocampista</option>
              <option value="Attaccante">Attaccante</option>
            </select>
          </label>
          <button onClick={handleSave} className={styles.saveButton}>
            Salva
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
