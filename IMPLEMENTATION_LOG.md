# ポートフォリオサイト実装ログ

## 実装日: 2025-08-21

### 実装内容

#### 1. メール送信機能の実装
- **使用技術**: Resend + Vercel
- **実装範囲**: コンタクトフォームからの実際のメール送信

##### 実装手順
1. **Resendライブラリのインストール**
   ```bash
   npm install resend
   ```

2. **環境変数の設定**
   - `.env` ファイルに `RESEND_API_KEY` を設定
   - Vercel環境変数にも同様に設定

3. **APIエンドポイントの作成**
   - ファイル: `src/pages/api/contact.ts`
   - 機能: JSON形式でフォームデータを受信し、Resend経由でメール送信
   - From: `Portfolio Contact <onboarding@resend.dev>`
   - To: `fm13071303@rx.tnc.ne.jp` (Resendアカウントの認証済みメール)

4. **フロントエンド修正**
   - ファイル: `src/components/ContactForm.tsx`
   - FormDataからJSON形式のAPI呼び出しに変更
   - フィールド追加: name (任意), email (必須), message (必須)

5. **スタイル修正**
   - ファイル: `src/styles/global.css`
   - textareaのスタイリング追加
   - 画像サイズ調整 (200px → 280px)

#### 2. Astro設定の調整
- **設定変更**: `output: 'server'` に変更
- **プリレンダリング設定**: 静的ページに `prerender = true` を追加
  - `index.astro`
  - `about.astro`
  - `projects.astro`
  - `404.astro`
  - `blog/[...page].astro`

#### 3. プロジェクト追加
- **新規プロジェクト**: Jichikai App
- **URL**: https://jichikai-app.vercel.app/
- **サムネイル**: 中野東川原自治会サイトのスクリーンショット
- **配置**: Recent Projectsの最初に表示

##### 変更ファイル
- `src/content/projects.yaml`: 新規プロジェクト追加、順序変更
- `src/assets/project-thumbnails/jichikai-app.png`: サムネイル画像追加

### 技術的な課題と解決策

#### 課題1: Astro staticモードでのAPI制限
**解決策**: `output: 'server'` + 個別ページの `prerender = true` でハイブリッド構成

#### 課題2: Resendのテスト制限
**解決策**: 認証済みメールアドレスへの送信に変更

#### 課題3: FormDataの Content-Type エラー
**解決策**: JSON形式でのデータ送信に変更

### 現在の状態
- ✅ メール送信機能: 正常動作
- ✅ ブログページ: 正常表示
- ✅ プロジェクト一覧: Jichikai Appが最上位に表示
- ✅ 本番環境: Vercelデプロイ済み

### 今後の改善点
1. **メール送信先の変更**: 本格運用時は `kyundesign2022@gmail.com` に変更
2. **ドメイン認証**: Resendでカスタムドメインを認証
3. **専用サムネイル**: 各プロジェクトの専用スクリーンショット作成

### 関連ファイル
```
src/
├── components/
│   └── ContactForm.tsx          # メール送信フォーム
├── pages/
│   ├── api/
│   │   └── contact.ts          # メール送信API
│   ├── index.astro             # ホームページ
│   ├── about.astro             # アバウトページ
│   ├── projects.astro          # プロジェクト一覧
│   └── blog/
│       └── [...page].astro     # ブログページネーション
├── content/
│   └── projects.yaml           # プロジェクト情報
├── assets/
│   └── project-thumbnails/
│       └── jichikai-app.png    # 新規サムネイル
└── styles/
    └── global.css              # スタイル調整

astro.config.mjs                # Astro設定
.env                           # 環境変数
```

### 使用技術スタック
- **フレームワーク**: Astro v5.7.9
- **UI**: React v19.1.0
- **メール送信**: Resend v6.0.1
- **通知**: react-hot-toast v2.5.2
- **デプロイ**: Vercel
- **スタイリング**: CSS Variables