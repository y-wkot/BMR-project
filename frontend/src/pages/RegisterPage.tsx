import React, { useState } from "react";

const RegisterPage: React.FC = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    const res = await fetch("http://localhost:8080/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, password }),
    });

    const data = await res.text();
    if (res.ok) {
      setMessage("登録が完了しました！");
    } else if (res.status === 409) {
      setMessage("そのユーザー名はすでに使われています。");
    } else {
      setMessage("登録に失敗しました。");
    }
  };

  return (
    <div className="page-container">
      <h2>会員登録</h2>
      <div>
        <label>ユーザー名：</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>パスワード：</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleRegister}>登録</button>
      <p>{message}</p>
    </div>
  );
};

export default RegisterPage;
