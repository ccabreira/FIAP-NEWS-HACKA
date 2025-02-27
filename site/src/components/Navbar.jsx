import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.logo}>
        FIAP News
      </Link>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#1a1a1a",
    padding: "15px 20px",
    textAlign: "center",
    borderBottom: "2px solid #E6005A",
  },
  logo: {
    color: "#E6005A",
    fontSize: "24px",
    fontWeight: "bold",
    textDecoration: "none",
  },
};
