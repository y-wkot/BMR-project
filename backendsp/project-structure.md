# プロジェクト構成メモ

## 🎯 目的
ゲストユーザーが基礎代謝を入力し、PFCバランスを計算できるWebアプリ。

---

## 🏗️ ディレクトリ構造

bmr-project/
├── frontend/
│ ├── public/
│ │ └── img/
│ │ └── TDEE.jpg
│ ├── src/
│ │ ├── css/
│ │ │ └── guest.css
│ │ ├── pages/
│ │ │ └── GuestPage.tsx
│ │ └── utils/
│ │ └── calculateBmr.ts (旧コード or テスト用)

yaml
コピーする
編集する

---

## ⚙️ フロントエンド（React）

- **GuestPage.tsx**
  - 入力フォーム: 性別・年齢・身長・体重・運動強度
  - ボタン押下で `/api/calculate` にPOST
  - BMR結果表示 + PFCページへ遷移

---

## 🧠 バックエンド（Spring Boot）

- `BmrController.java`
  - `/api/calculate`：POST受け取り → BMR計算 → JSON返却
- DTO: `BmrRequest`, `BmrResponse`

---

## ✨ 今後のアイデア
- ログインユーザー用ページ追加
- データ保存機能（DB連携）
- PFC画面で食材候補を出す機能