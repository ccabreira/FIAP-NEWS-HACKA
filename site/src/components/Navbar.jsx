import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header style={styles.header}>
      {/* 🔹 Link para Home */}
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
    fontSize: "18px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" // 🔹 Adiciona um leve sombreamento para destacar o cabeçalho
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#E6005A",
    textDecoration: "none",
    marginLeft: "20px" // 🔹 Mantém alinhado à esquerda
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "20px", // 🔹 Espaçamento melhor entre os itens de navegação
    marginRight: "20px"
  },
  userName: {
    fontWeight: "bold",
    fontSize: "16px",
    color: "#E6005A"
  },
  navLink: {
    color: "#E6005A",
    textDecoration: "none",
    fontSize: "16px",
    padding: "8px 12px",
    borderRadius: "5px",
    transition: "background 0.3s",
  },
  navLinkHover: {
    background: "#E6005A",
    color: "#FFF"
  },
  logoutButton: {
    background: "none",
    border: "1px solid #E6005A",
    color: "#E6005A",
    padding: "6px 12px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background 0.3s",
  }
};

export default Navbar;



