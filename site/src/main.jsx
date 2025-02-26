import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { NewsProvider } from "./context/NewsContext"; // Adicionado para que o contexto NewsProvider fique na raiz
import App from "./App";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router> {/* Router deve estar apenas aqui */}
      <AuthProvider>
        <NewsProvider> {/* Mantendo a ordem dos contextos */}
          <App />
        </NewsProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
