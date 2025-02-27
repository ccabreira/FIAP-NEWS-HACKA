import { Routes, Route } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewsDetail from "./pages/NewsDetail";
import AdminPanel from "./pages/AdminPanel";
import CreateNews from "./pages/CreateNews";
import EditNews from "./pages/EditNews";
import PrivateRoute from "./components/PrivateRoute";
import NewsList from "./pages/NewsList";
import ForgotPassword from "./pages/ForgotPassword";

export default function App() {
  return (
    <BaseLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<PrivateRoute><AdminPanel /></PrivateRoute>} />
        <Route path="/news/new" element={<PrivateRoute><CreateNews /></PrivateRoute>} />
        <Route path="/news/edit/:id" element={<PrivateRoute><EditNews /></PrivateRoute>} />
      </Routes>
    </BaseLayout>
  );
}

