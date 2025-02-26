import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { NewsProvider } from "./context/NewsContext";
import BaseLayout from "./layouts/BaseLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewsDetail from "./pages/NewsDetail";
import PrivateRoute from "./components/PrivateRoute";
import NewsList from "./pages/NewsList";

export default function App() {
  return (
    <AuthProvider>
      <NewsProvider>
        <Router>
          <BaseLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/news" element={<PrivateRoute><NewsList /></PrivateRoute>} />
              <Route path="/news/:id" element={<PrivateRoute><NewsDetail /></PrivateRoute>} />
            </Routes>
          </BaseLayout>
        </Router>
      </NewsProvider>
    </AuthProvider>
  );
}

