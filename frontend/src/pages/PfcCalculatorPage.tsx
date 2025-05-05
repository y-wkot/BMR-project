import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/basic.css";

interface LocationState {
  weight: number;
  bmr: number;
}

const PfcCalculatorPage: React.FC = () => {
  const location = useLocation();
  const state = location.state as LocationState | undefined;

  const [weight, setWeight] = useState<number | null>(null);
  const [bmr, setBmr] = useState<number | null>(null);

  const [proteinFactor, setProteinFactor] = useState(2.0);
  const [fatGram, setFatGram] = useState(40);
  const [carbGram, setCarbGram] = useState(0);
  const [proteinKcal, setProteinKcal] = useState(0);
  const [fatKcal, setFatKcal] = useState(0);
  const [carbKcal, setCarbKcal] = useState(0);
  const [totalKcal, setTotalKcal] = useState(0);
  const [diffKcal, setDiffKcal] = useState(0);

  useEffect(() => {
    if (state?.weight && state?.bmr) {
      setWeight(state.weight);
      setBmr(state.bmr);
    }
  }, [state]);

  useEffect(() => {
    if (weight !== null && bmr !== null) {
      const proteinGram = weight * proteinFactor;
      const proteinKcal = proteinGram * 4;
      const fatKcal = fatGram * 9;
      const carbKcal = (carbGram + 20) * 4; // 食物繊維20g（80kcal）を加算
      const total = proteinKcal + fatKcal + carbKcal;
      const diff = total - bmr;

      setProteinKcal(proteinKcal);
      setFatKcal(fatKcal);
      setCarbKcal(carbKcal);
      setTotalKcal(total);
      setDiffKcal(diff);
    }
  }, [proteinFactor, fatGram, carbGram, weight, bmr]);

  if (weight === null || bmr === null) {
    return <p>データが不足しています。最初からやり直してください。</p>;
  }

  return (
    <div className="page-container">
      <h2>
        体重: {weight.toFixed(2)} kg / BMR: {bmr.toFixed(2)} kcal
      </h2>

      <div>
        <h4>🥩 たんぱく質: 体重の {proteinFactor}倍</h4>
        <p className="explanation">
          たんぱく質は筋肉や臓器の材料となる大切な栄養素で、1gあたり4kcalのエネルギーを持ちます。
          引き締めた身体を目指すには体重1kgあたり2〜4倍の摂取が推奨されます。運動をしない日も摂取しましょう。
        </p>
        <input
          type="range"
          min="1"
          max="5"
          step="0.1"
          value={proteinFactor}
          onChange={(e) => setProteinFactor(Number(e.target.value))}
        />
        <input
          type="number"
          min="1"
          max="5"
          step="0.1"
          value={proteinFactor}
          onChange={(e) => setProteinFactor(Number(e.target.value))}
        />
        <p>
          {(weight * proteinFactor).toFixed(2)}g / {proteinKcal.toFixed(2)} kcal
        </p>
      </div>

      <div>
        <h4>🧈 脂質: {fatGram}g</h4>
        <p className="explanation">
          脂質は1gあたり9kcalです。糖質カットより脂質カットで減量する方がリバウンドしにくいです（諸説あり）
          難しいことは考えずここを削りましょう。
        </p>
        <input
          type="range"
          min="10"
          max="150"
          step="1"
          value={fatGram}
          onChange={(e) => setFatGram(Number(e.target.value))}
        />
        <input
          type="number"
          min="10"
          max="150"
          step="1"
          value={fatGram}
          onChange={(e) => setFatGram(Number(e.target.value))}
        />
        <p>
          {" "}
          {fatGram.toFixed(2)}g / {fatKcal.toFixed(2)} kcal
        </p>
      </div>

      <div>
        <h4>🍚 炭水化物: {carbGram}g</h4>
        <p className="explanation">
          炭水化物（糖質+食物繊維）は、1gあたり4kcal。自動的に食物繊維20g（約80kcal）を含めています。
          基礎代謝-タンパク質-脂質　分摂取できる枠があります。極端に減らすとリバウンドに繋がります。生活に支障のないように。
        </p>
        <input
          type="range"
          min="0"
          max="500"
          step="1"
          value={carbGram}
          onChange={(e) => setCarbGram(Number(e.target.value))}
        />
        <input
          type="number"
          min="0"
          max="500"
          step="1"
          value={carbGram}
          onChange={(e) => setCarbGram(Number(e.target.value))}
        />
        <p>
          {" "}
          {(carbGram + 20).toFixed(2)}g / {carbKcal.toFixed(2)} kcal
        </p>
      </div>

      <h2>
        合計: {totalKcal.toFixed(2)} kcal / 差: {diffKcal.toFixed(2)} kcal
      </h2>
      <p>
        食品のパッケージ裏に書いてある栄養素を当てはめて計算しながら生活してみましょう。
      </p>
    </div>
  );
};

export default PfcCalculatorPage;
