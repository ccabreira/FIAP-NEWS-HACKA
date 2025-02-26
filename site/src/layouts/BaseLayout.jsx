import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const BaseLayout = ({ children }) => {
  const { user, logout } = useAuth();

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        {!user ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Registrar</Link>
          </>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default BaseLayout;
