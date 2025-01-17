import React, { useEffect, useState } from "react";
import { getCurrentUser } from "../utils/api";
import AdminPanel from "../components/AdminPanel";

const AdminPage: React.FC = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUser();
      if (currentUser?.role !== "admin") {
        window.location.href = "/"; // Reindirizza alla homepage
      } else {
        setUser(currentUser);
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  if (loading) return <p>Caricamento...</p>;

  return user ? <AdminPanel /> : null;
};

export default AdminPage;
