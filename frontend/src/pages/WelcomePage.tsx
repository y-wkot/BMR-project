import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/basic.css";

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <h1>基礎代謝計算・体重管理アプリへようこそ</h1>
      <h2>未実装のページもあります。</h2>

      <button onClick={() => navigate("/login")}>ログインして利用</button>
      <button onClick={() => navigate("/register")}>会員登録</button>
      <button onClick={() => navigate("/guest")}>ゲストモード利用</button>
    </div>
  );
};
export default WelcomePage;
