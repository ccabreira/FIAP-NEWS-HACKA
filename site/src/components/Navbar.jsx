import { Link } from "react-router-dom";
import { useContext } from "react";
import { useAuth } from "../context/AuthContext";


function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Registrar</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;


