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

export default function App() {
  return (
    <BaseLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/admin" element={<PrivateRoute><AdminPanel /></PrivateRoute>} />
        <Route path="/news/new" element={<PrivateRoute><CreateNews /></PrivateRoute>} />
        <Route path="/news/edit/:id" element={<PrivateRoute><EditNews /></PrivateRoute>} />
      </Routes>
    </BaseLayout>
  );
}
