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
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#1a001f",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#e6005a",
    textDecoration: "none",
    marginLeft: "20px"
  },
  nav: {
    display: "flex",
    gap: "15px",
    marginRight: "20px"
  },
  userName: {
    marginRight: "15px",
    fontSize: "16px",
    color: "#fff"
  },
  navLink: {
    color: "#e6005a",
    textDecoration: "none",
    fontSize: "16px"
  },
  logoutButton: {
    background: "none",
    border: "none",
    color: "#e6005a",
    cursor: "pointer",
    fontSize: "16px"
  }
};