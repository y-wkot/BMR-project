# BMR 計算＆PFC バランス管理アプリ

BMR（基礎代謝量）を計算し、ゲストおよびログインユーザー向けに PFC バランス（タンパク質・脂質・炭水化物）の目標値を表示・保存できる Web アプリケーションです。

- アプリ公開先（Render）: [https://bmr-frontend.onrender.com]

## 🛠 技術スタック

| フロントエンド | バックエンド            | インフラ            |
| -------------- | ----------------------- | ------------------- |
| React + Vite   | Spring Boot             | Render              |
| TypeScript     | Spring Security（予定） | MySQL（Render）予定 |

## 📦 主な機能

- ゲストユーザー

  - BMR の自動計算（性別・年齢・身長・体重に基づく）
  - PFC バランスの自動算出と表示

- 会員ユーザー（ログイン後）
  - ユーザー登録・ログイン機能（実装中）
  - PFC データの保存・読み込み機能（予定）

```bash
cd frontend
npm install
npm run dev
```
