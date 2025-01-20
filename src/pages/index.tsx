import React, { useEffect, useState } from "react";
import { getCurrentUser } from "../utils/api";
import Link from "next/link";
import styles from "../styles/Home.module.css";

type User = {
  id: number;
  email: string;
  role: "user" | "admin";
};

const Home: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    };
    fetchUser();
  }, []);

  return (
    <div className={styles.homeContainer}>
      <h1>Benvenuto su CalcettoApp!</h1>
      <p>Organizza e prenota partite di calcetto in modo semplice e veloce.</p>

      {!user ? (
        <div className={styles.guestOptions}>
          <p>Accedi o registrati per iniziare.</p>
          <Link href="/login">
            <a className={styles.button}>Login</a>
          </Link>
        </div>
      ) : user.role === "user" ? (
        <div className={styles.userOptions}>
          <p>Benvenuto, {user.email}!</p>
          <Link href="/matches">
            <a className={styles.button}>Prenota una Partita</a>
          </Link>
          <Link href="/profile">
            <a className={styles.button}>Il Mio Profilo</a>
          </Link>
        </div>
      ) : (
        <div className={styles.adminOptions}>
          <p>Benvenuto, {user.email}! (Amministratore)</p>
          <Link href="/admin">
            <a className={styles.button}>Pannello Admin</a>
          </Link>
          <Link href="/matches">
            <a className={styles.button}>Partite Disponibili</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
