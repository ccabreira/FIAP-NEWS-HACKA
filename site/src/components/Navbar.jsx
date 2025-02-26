import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header style={styles.header}>
      <Link to="/" style={styles.logo}>Fiap News</Link>
      <nav style={styles.nav}>
        {user ? (
          <>
            <span style={styles.userName}>{user.name}</span>
            <button onClick={logout} style={styles.logoutButton}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.navLink}>Login</Link>
            <Link to="/register" style={styles.navLink}>Registrar</Link>
          </>
        )}
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    background: "#1A001F",
    color: "#E6005A",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#E6005A",
    textDecoration: "none",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
  userName: {
    fontSize: "16px",
    color: "#E6005A",
  },
  navLink: {
    color: "#E6005A",
    textDecoration: "none",
    fontSize: "16px",
  },
  logoutButton: {
    background: "none",
    border: "none",
    color: "#E6005A",
    cursor: "pointer",
    fontSize: "16px",
  },
};