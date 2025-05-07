# BMR計算＆PFCバランス管理アプリ

BMR（基礎代謝量）を計算し、ゲストおよびログインユーザー向けにPFCバランス（タンパク質・脂質・炭水化物）の目標値を表示・保存できるWebアプリケーションです。

- アプリ公開先（Render）: [https://example.onrender.com](https://example.onrender.com)

## 🛠 技術スタック

| フロントエンド | バックエンド   | インフラ     | 
|----------------|----------------|--------------|
| React + Vite   | Spring Boot    | Render       | 
| TypeScript     | Spring Security（予定） | MySQL（Render）予定 |

## 📦 主な機能

- ゲストユーザー
  - BMRの自動計算（性別・年齢・身長・体重に基づく）
  - PFCバランスの自動算出と表示

- 会員ユーザー（ログイン後）
  - ユーザー登録・ログイン機能（実装中）
  - PFCデータの保存・読み込み機能（予定）


```bash
cd frontend
npm install
npm run dev
