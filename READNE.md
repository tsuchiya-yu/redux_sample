# Reduxサンプルアプリケーション

本プロジェクトは、ReactとReduxを使用したシンプルなカウンターアプリケーションです。

## 📌 環境構成
- **フロントエンド**: React 18, Redux 4.2, React Redux 8.0
- **開発環境**: Vite 4, Node.js 18 (Alpine)
- **コンテナ管理**: Docker, Docker Compose

## 📌 フォルダ構成
redux-app/
  ├── src/
  │   ├── store/
  │   │   ├── actions.js        # Reduxアクション定義
  │   │   ├── reducer.js        # Reduxリデューサー
  │   │   ├── store.js          # Reduxストア
  │   ├── components/
  │   │   ├── Counter.js        # カウンターコンポーネント
  │   ├── App.js                # ルートコンポーネント
  │   ├── main.js               # アプリのエントリーポイント
  ├── public/
  │   ├── index.html            # HTMLエントリーポイント
  ├── package.json              # Node.jsパッケージ管理ファイル
  ├── Dockerfile                # Docker環境設定ファイル
  ├── docker compose.yml        # Docker Compose構成ファイル
  ├── README.md                 # 本ファイル

---

## 🚀 セットアップ手順

### 1️⃣ 必要要件
以下のツールがインストールされていることを確認してください。

- Docker (https://www.docker.com/)
- Docker Compose

### 2️⃣ 環境構築
#### ① リポジトリをクローン
git clone <リポジトリURL>
cd redux-app

#### ② Dockerコンテナをビルド
docker compose build

#### ③ Dockerコンテナを起動
docker compose up -d

#### ④ アプリケーションにアクセス
以下のURLにアクセスしてアプリケーションを確認してください。

http://localhost:5173

---

## 🔄 開発コマンド
### コンテナの操作
| コマンド | 説明 |
|---------|------|
| docker compose up -d | コンテナをバックグラウンドで起動 |
| docker compose down | コンテナを停止 |
| docker compose build | コンテナをビルド |
| docker compose logs -f | ログをリアルタイムで監視 |
| docker compose exec redux-app sh | コンテナのシェルに入る |

---

## 📌 プロジェクトの詳細
### 1. Reduxの基本構成
本プロジェクトでは、以下の Redux の基本的な構成を採用しています。

- **Action**: store/actions.js
- **Reducer**: store/reducer.js
- **Store**: store/store.js
- **React-ReduxのProvider**: main.js
- **カウンターコンポーネント**: components/Counter.js

---

### 2. 動作確認
アプリにアクセス後、以下の動作を確認してください。

✅ 「+」ボタンをクリックするとカウンターが増加する。  
✅ 「-」ボタンをクリックするとカウンターが減少する。  
✅ Redux DevTools を使用して状態が正しく変更されていることを確認する。  

---


## ❓ よくある質問
### Q1: `docker compose up` してもアプリにアクセスできない
**A:**  
- `docker compose ps` でコンテナが正しく起動しているか確認してください。  
- `docker compose logs -f` でエラーメッセージが出ていないか確認してください。  
- `docker compose down && docker compose up --build` でリビルドを試してください。

### Q2: 開発中にコードを変更しても反映されない
**A:**  
- `docker compose restart` でコンテナを再起動してください。  
- `volumes` の設定で `node_modules` のキャッシュが影響している可能性があります。

---

## 🎯 まとめ
本プロジェクトは、React + Redux のシンプルなアプリのサンプルです。Redux の基本概念を理解しながら、実際の開発環境でどのように活用するかを学ぶことができます。ぜひご活用ください！ 🚀
