import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getCurrentUser, logout } from "../utils/api";
import styles from "../styles/Navbar.module.css";

type User = {
  id: number;
  email: string;
  role: "user" | "admin";
};

const Navbar: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await logout();
    setUser(null);
    alert("Logout effettuato.");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <a>CalcettoApp</a>
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/matches">
            <a>Partite</a>
          </Link>
        </li>
        {user?.role === "admin" && (
          <li>
            <Link href="/admin">
              <a>Pannello Admin</a>
            </Link>
          </li>
        )}
        {user ? (
          <>
            <li>
              <Link href="/profile">
                <a>Profilo</a>
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} className={styles.logoutButton}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
