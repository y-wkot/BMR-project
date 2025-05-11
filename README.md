# BMR 計算＆PFC バランス管理アプリ

本アプリは、基礎代謝量（BMR）を計算し、PFC バランス（タンパク質・脂質・炭水化物）の目標値をゲストまたは会員ユーザー別に表示・保存できる Web アプリケーションです。
（現在はゲスト利用機能が使えます）

🔗 **アプリ公開 URL（Render）**: [https://bmr-frontend.onrender.com](https://bmr-frontend.onrender.com)

```

## 📁 プロジェクト構成

bmr-project/
├── backendsp/ # Spring Boot バックエンド（Java）
│ ├── src/main/java/com/example/demo/
│ │ ├── controller/ # 各種 API コントローラ
│ │ ├── dto/ # リクエスト・レスポンス用 DTO
│ │ ├── model/ # エンティティ
│ │ ├── repository/ # JPA リポジトリ
│ │ ├── service/ # ビジネスロジック層
│ │ ├── BackendspApplication.java
│ │ └── WebConfig.java
│ ├── src/main/resources/
│ │ └── application.properties
│ ├── Dockerfile
│ └── pom.xml
│
├── frontend/ # React + TypeScript フロントエンド
│ ├── src/
│ │ ├── pages/ # 各画面の TSX ファイル
│ │ └── css/ # スタイル
│ ├── public/
│ ├── package.json
│ └── tsconfig.json
│
└── README.md

---

## 🛠 技術スタック

| フロントエンド                          | バックエンド                      | インフラ                             |
| ---------------------------------- | --------------------------------- | -------------------------------------- |
| React 19 + Create React App（CRA） | Spring Boot 3.4.5（Java 17）       | Render（デプロイ）                      |
| TypeScript 4.9.5                   | REST API / DTO / JPA              | Docker (27.3.1)                        |
| CSS Modules（通常の CSS）           | Spring Security（導入予定）        | MySQL（Render不可 → PlanetScaleを検討） |

Node.js：v18：環境構築のために使用
npm：v9
React：v19.1.0
react-router-dom：v7.5.3
TypeScript：v4.9.5
React Scripts (CRA)：v5.0.1（Viteではない）
axios：v1.9.0
Java：17
Spring Boot：3.4.5
IDE：Visual Studio Code / Eclipse


```

## 📦 主な機能

### 👤 ゲストユーザー向け
- BMR（基礎代謝量）の自動計算（年齢・性別・身長・体重に基づく）
- PFC バランス（タンパク質・脂質・炭水化物）の自動計算と表示

### 🔐 会員ユーザー向け（実装中）
- ユーザー登録・ログイン機能（予定）
- 計算結果の保存・履歴表示機能（予定）
