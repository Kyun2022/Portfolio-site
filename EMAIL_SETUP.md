# メール送信機能の設定手順

## 概要

ContactForm コンポーネントで実際のメール送信・受信機能が実装されました。

## 設定手順

### 1. 環境変数の設定

プロジェクトルートに `.env.local` ファイルを作成し、以下の内容を設定してください
：

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### 2. Google アプリパスワードの取得

1. Google アカウントの 2 段階認証を有効にする
2. https://myaccount.google.com/apppasswords にアクセス
3. 「アプリパスワード」を生成
4. 生成された 16 文字のパスワードを `EMAIL_PASS` に設定

### 3. 実装された機能

- **お問い合わせ通知**: フォーム送信時に設定したメールアドレスに通知が届きます
- **自動返信**: 送信者に自動返信メールが送信されます
- **フォーム項目**:
  - 名前（任意）
  - メールアドレス（必須）
  - メッセージ（任意）

### 4. セキュリティ注意事項

- `.env.local` ファイルは絶対に Git にコミットしないでください
- Google アプリパスワードは通常のパスワードとは異なります
- 本番環境では環境変数を Vercel の設定画面で設定してください

### 5. 動作確認

1. 開発サーバーを起動: `npm run dev`
2. ContactForm からテスト送信
3. 設定したメールアドレスに通知と自動返信が届くことを確認

## トラブルシューティング

### よくあるエラーと解決方法

1. **「POST requests are not available in static endpoints」エラー**
   - 解決済み: `astro.config.mjs`で`output: 'server'`を設定
   - APIエンドポイントで`export const prerender = false;`を設定

2. **「Content-Type was not one of multipart/form-data」エラー**
   - 解決済み: JSONでデータを送信するように修正

3. **「nodemailer.createTransporter is not a function」エラー**
   - 解決済み: `createTransporter`を`createTransport`に修正
   - nodemailerのインポート方法を`import * as nodemailer`に変更

4. **メール送信に失敗する場合**
   - ブラウザの開発者ツールでエラーログを確認
   - Google アプリパスワードが正しく設定されているか確認
   - 2 段階認証が有効になっているか確認
   - `.env.local`ファイルが正しく作成されているか確認

### 環境変数設定例

`.env.local`ファイルの内容例：
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
```
