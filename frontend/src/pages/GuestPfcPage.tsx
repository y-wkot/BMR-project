import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // 値の受け渡し（前頁から）
import "../css/basic.css";

// ゲスト用PFC計算
const GuestPfcPage: React.FC = () => {
  const location = useLocation();
  const { weight, bmr } = location.state;

  // 各栄養素と合計値
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  const [carb, setCarb] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0); // BMRと体重が入る

  const fetchPfc = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8080"; // ローカルと本番どちらでも対応 .envで設定

      // サーバーへ値を渡す
      const response = await axios.post(`${apiUrl}/api/pfc`, {
        weight,
        bmr,
      });

      const { protein, fat, carb, totalCalories } = response.data;
      setProtein(protein.toFixed(2));
      setFat(fat.toFixed(2));
      setCarb(carb.toFixed(2));
      setTotalCalories(totalCalories.toFixed(2));
    } catch (error) {
      alert("PFC計算中にエラーが発生しました");
      console.error(error);
    }
  };

  return (
    <div className="page-container">
      <h1>ゲスト用PFCバランスページ</h1>
      <button onClick={fetchPfc}>PFCバランスを計算する</button>
      <div>
        <p>たんぱく質: {protein} g</p>
        <p>脂質: {fat} g</p>
        <p>炭水化物: {carb} g</p>
        <p>合計カロリー: {totalCalories} kcal</p>
      </div>
    </div>
  );
};

export default GuestPfcPage;
