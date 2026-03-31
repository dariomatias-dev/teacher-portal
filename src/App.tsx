import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { TeacherPage } from "./pages/TeacherPage";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teacher/:uid" element={<TeacherPage />} />
      </Routes>
    </Router>
  );
}
