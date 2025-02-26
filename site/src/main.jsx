import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom"; // ✅ Importação correta
import { AuthProvider } from "./context/AuthContext";
import App from "./App";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Router> {/* ✅ BrowserRouter agora está corretamente definido como Router */}
        <App />
      </Router>
    </AuthProvider>
  </React.StrictMode>
);
