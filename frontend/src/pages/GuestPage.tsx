import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/basic.css";

// 型定義
interface BmrRequest {
  gender: string;
  age: number;
  height: number;
  weight: number;
  exerciseIntensity: number;
}

interface BmrResponse {
  bmr: number;
}

const GuestPage: React.FC = () => {
  const navigate = useNavigate();

  const [gender, setGender] = useState<string>("");
  const [age, setAge] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [weight, setWeight] = useState<number | "">("");
  const [intensity, setIntensity] = useState<number | "">("");
  const [bmr, setBmr] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [isFirstRequest, setIsFirstRequest] = useState<boolean>(true);

  // 基礎代謝計算
  const handleCalculate = async () => {
    if (
      !gender ||
      age === "" ||
      height === "" ||
      weight === "" ||
      intensity === ""
    ) {
      alert("全ての項目を入力してください！");
      return;
    }
    if (age <= 0 || height <= 0 || weight <= 0 || intensity <= 0) {
      alert("すべての数値は正の値を入力してください！"); // マイナスを入れない
      return;
    }

    const requestData: BmrRequest = {
      gender,
      age: Number(age),
      height: Number(height),
      weight: Number(weight),
      exerciseIntensity: Number(intensity),
    };

    try {
      setLoading(true);
      setError(false);

      const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8080";

      const response = await axios.post<BmrResponse>(
        `${apiUrl}/api/calculate`,
        requestData
      );

      setBmr(response.data.bmr);
    } catch (err) {
      console.error("BMR計算中にエラー:", err);
      setError(true);
      alert("サーバーエラーが発生しました");
    } finally {
      setLoading(false);
      setIsFirstRequest(false); // 通信後に初回フラグをオフ
    }
  };

  const goToPFC = () => {
    if (bmr !== null && weight !== "") {
      navigate("/pfcCalculator", {
        state: { weight: Number(weight), bmr: Number(bmr) },
      });
    }
  };
  return (
    <div className="page-container">
      <h1>ゲスト様 基礎代謝計算ページ</h1>
      <p>入力後、下部のボタンでPFCバランスへ進めます（保存なし）</p>

      <div>
        <label>性別</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">選択してください</option>
          <option value="man">男</option>
          <option value="woman">女</option>
        </select>
      </div>

      {/* 入力フィールド */}
      <InputField
        label="年齢"
        value={age}
        setValue={setAge}
        type="number"
        placeholder="数値を入力してください"
      />
      <InputField
        label="身長（cm）"
        value={height}
        setValue={setHeight}
        type="number"
        placeholder="数値を入力してください"
      />
      <InputField
        label="体重（kg）"
        value={weight}
        setValue={setWeight}
        type="number"
        placeholder="数値を入力してください"
      />
      {/* 運動強度入力フィールドとリンク */}
      <div>
        <label>
          <a href="/img/TDEE.jpg" target="_blank" rel="noopener noreferrer">
            ※運動強度とは？
          </a>
        </label>
      </div>
      <InputField
        label="運動強度（倍率）"
        value={intensity}
        setValue={setIntensity}
        type="number"
        placeholder="数値を入力してください"
        step="0.1"
      />

      <button onClick={handleCalculate} disabled={loading}>
        {loading ? "計算中…" : "計算開始"}
      </button>

      {/* 初回通信中だけ表示 */}
      {loading && isFirstRequest && (
        <p style={{ color: "orange" }}>
          初回アクセス時はサーバーの起動により、応答に1分程度かかる場合があります…
        </p>
      )}

      {/* 計算結果表示 */}
      {bmr !== null && !error && (
        <>
          <div>
            あなたの基礎代謝は <strong>{bmr.toFixed(2)} kcal</strong> です！
          </div>
          <button onClick={goToPFC}>PFCバランスを作成する</button>
        </>
      )}
    </div>
  );
};

// 入力フィールドコンポーネント
interface InputFieldProps {
  label: string;
  value: number | "";
  setValue: React.Dispatch<React.SetStateAction<number | "">>;
  type: string;
  placeholder: string;
  step?: string; // 任意のプロパティ
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  setValue,
  type,
  placeholder,
  step,
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        step={step}
        onChange={(e) =>
          setValue(e.target.value === "" ? "" : Number(e.target.value))
        }
      />
    </div>
  );
};

export default GuestPage;
