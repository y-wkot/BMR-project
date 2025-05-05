import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/basic.css";

const GuestPfcPage: React.FC = () => {
  const location = useLocation();
  const { weight, bmr } = location.state;

  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  const [carb, setCarb] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const fetchPfc = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/pfc", {
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
