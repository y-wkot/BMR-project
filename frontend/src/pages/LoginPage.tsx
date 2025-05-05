import React from "react";
import "../css/basic.css";

const LoginPage: React.FC = () => {
  return (
    <div className="page-container">
      <h2>ログイン</h2>
      <form action="/login" method="post">
        <div>
          <label htmlFor="userId">ログインID</label>
          <input type="text" id="userId" required />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit">ログイン</button>
      </form>

      <hr />

      <div>
        <a href="/register">
          <button>会員登録</button>
        </a>
        <a href="/guest">
          <button>ゲストで使用（非会員向け）</button>
        </a>
        <button disabled>ID・PWをお忘れの方（機能準備中）</button>
      </div>
    </div>
  );
};

export default LoginPage;
