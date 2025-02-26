import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function BaseLayout({ children }) {
  return (
    <div>
      <nav>
        <Link to="/">🏠 Home</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
}

export default BaseLayout;