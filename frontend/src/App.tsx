import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import GuestPage from "./pages/GuestPage";
import GuestPfcPage from "./pages/GuestPfcPage";
import LoginPage from "./pages/LoginPage";
import PfcCalculatorPage from "./pages/PfcCalculatorPage";
import RegisterPage from "./pages/RegisterPage";
import WelcomePage from "./pages/WelcomePage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/guest" element={<GuestPage />} />
        <Route path="/pfc" element={<GuestPfcPage />} />
        <Route path="/pfcCalculator" element={<PfcCalculatorPage />} />

        {/* 未実装リンクに対して */}
        <Route path="*" element={<h2>ページが見つかりません</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
