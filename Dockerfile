# 1. Node.jsの公式イメージを使用
FROM node:18-alpine

# 2. 作業ディレクトリを設定
WORKDIR /app

# 3. package.json と package-lock.json をコピー
COPY package.json package-lock.json ./

# 4. アプリケーションのコードをコピー
COPY . .

# 5. Viteの開発サーバーを起動
CMD ["npm", "run", "dev"]
