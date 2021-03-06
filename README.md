## Crypto Dashboard

YouTube を観て作成しました。

参照元と違うところは、日本国内で購入できる暗号通貨を一応対応したところです。

## API キーの取得

[RapidAPI](https://rapidapi.com/)を利用しているのでそちらでキーを取得してください。
[Alpha Vantage API](https://rapidapi.com/alphavantage/api/alpha-vantage/)の
`CURRENCY_EXCHANGE_RATE(Crypto)`の`X-RapidAPI-Key`の値があなたのキーになります。

## 使い方

下記ターミナルにて

```
git clone https://github.com/nuovotaka/CryptoDashboard.git
```

```
cd CryptoDashboard
```

`node -v`でバージョン情報が表示されなければ、「Node.js」がインストールされていません。
インストールをしてください。

```
npm install
```

あなたの API_KEY を`Your_API_KEY`に設定してください。

```
echo REACT_APP_RAPID_API_KEY=Your_API_KEY > .env
```

ターミナルのタブを２つ開いて下記をバックエンドから実行してください。

```
npm run start:backend
npm run start:frontend
```

ブラウザにて`localhost:3000`で表示されます。

### 参照元

[Code with Ania Kubow](https://www.youtube.com/watch?v=_itMdiSc0KI)
