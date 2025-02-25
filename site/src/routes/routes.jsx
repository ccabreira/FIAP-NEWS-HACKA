import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsList from "../pages/NewsList";
import NewsDetail from "../pages/NewsDetail";
import PrivateRoute from "../components/PrivateRoute";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/news" element={<PrivateRoute><NewsList /></PrivateRoute>} />
      <Route path="/news/:id" element={<PrivateRoute><NewsDetail /></PrivateRoute>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}