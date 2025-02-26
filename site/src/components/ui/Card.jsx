export default function Card({ children }) {
  return (
    <div style={styles.card}>
      {children}
    </div>
  );
}

const styles = {
  card: {
    background: "#400040",
    padding: "15px",
    borderRadius: "8px",
    color: "#fff",
    textAlign: "left",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
  }
};
