import React, { useState } from "react";
import { login } from "../utils/api";
import { useRouter } from "next/router";
import styles from "../styles/Login.module.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Non usato nella simulazione
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await login(email, password);
      alert("Login effettuato con successo!");
      router.push("/"); // Reindirizza alla homepage
    } catch (err) {
      setError(err as string);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h1>Login</h1>
      {error && <p className={styles.error}>{error}</p>}
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.inputField}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.inputField}
        />
      </label>
      <button onClick={handleLogin} className={styles.loginButton}>
        Accedi
      </button>
    </div>
  );
};

export default Login;
