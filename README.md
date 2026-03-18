# Hiromu Odahara - Portfolio

ダーク・テック系のモダンポートフォリオサイト。
Nuxt 4 + TypeScript + Tailwind CSS v4 + Nuxt UI v3 で構築。

次にやること（コンテンツ更新）

  1. app/data/career.ts — 実際の職歴に修正
  2. app/components/sections/AboutSection.vue — 自己紹介文・Stats の数値を修正
  3. app/data/works.ts — Works の URL が有効か確認・追加

---

## 目次

- [ローカル開発](#ローカル開発)
- [GitHub Pages へのデプロイ](#github-pages-へのデプロイ)
- [コンテンツの更新方法](#コンテンツの更新方法)
  - [ポートフォリオ（制作物）を追加する](#ポートフォリオ制作物を追加する)
  - [職歴を追加・修正する](#職歴を追加修正する)
  - [スキルを追加する](#スキルを追加する)
  - [プロフィール情報を修正する](#プロフィール情報を修正する)
- [デザインのカスタマイズ](#デザインのカスタマイズ)
- [トラブルシューティング](#トラブルシューティング)
- [技術スタック](#技術スタック)

---

## ローカル開発

```bash
# 依存パッケージをインストール
npm install

# 開発サーバー起動（ホットリロード有効）
npm run dev
# → http://localhost:3000 でプレビュー
```

---

## GitHub Pages へのデプロイ

### 前提

- GitHub リポジトリの Settings → Pages → Source を `gh-pages` ブランチの `/ (root)` に設定してください。
- `gh-pages` ブランチは初回 `npm run deploy` 時に自動作成されます。

### サイトの公開場所

| 配置パターン | URL 例 | `NUXT_APP_BASE_URL` |
|-----------|--------|---------------------|
| ユーザーページ（username.github.io） | `https://odahara178.github.io/` | 不要（省略可） |
| プロジェクトページ | `https://odahara178.github.io/Portfolio/` | `/Portfolio/` |

### 初回デプロイ

```bash
# ユーザーページ（odahara178.github.io）にデプロイ
npm run deploy

# プロジェクトページ（/Portfolio/）にデプロイ
NUXT_APP_BASE_URL=/Portfolio/ npm run deploy
```

### サイトを更新する（2回目以降）

```bash
# 1. コードを修正する
# 2. ローカルで動作確認
npm run dev

# 3. デプロイ（ビルド → GitHub Pages へ自動アップロード）
npm run deploy
# または
NUXT_APP_BASE_URL=/Portfolio/ npm run deploy
```

数分後に GitHub Pages が反映されます。リポジトリの Actions タブで進捗を確認できます。

---

## コンテンツの更新方法

### ポートフォリオ（制作物）を追加する

`app/data/works.ts` を編集します。

```ts
export const works: Work[] = [
  // ↓ ここに追加（既存の下に並べる）
  {
    title: '新しいプロジェクト名',
    description: 'どんなアプリか 1〜2 文で説明。',
    thumbnail: '/img/thumbnail.jpg',   // public/img/ に画像を置く
    tags: ['Vue.js', 'TypeScript', 'Nuxt'],
    url: 'https://サイトのURL',         // 省略可（行ごと削除）
    github: 'https://github.com/...',  // 省略可（行ごと削除）
  },
]
```

**サムネイル画像の追加:**
1. 画像ファイルを `public/img/` に配置する
2. `thumbnail: '/img/ファイル名.jpg'` で参照する

### 職歴を追加・修正する

`app/data/career.ts` を編集します（新しい順に並べてください）。

```ts
export const careerEntries: CareerEntry[] = [
  {
    period: '2024年 〜 現在',
    company: '株式会社〇〇〇〇',
    role: 'フロントエンドエンジニア',
    description: '担当した業務の説明を書く。',
  },
  // ...
]
```

### スキルを追加する

`app/data/skills.ts` の該当カテゴリ（Frontend / Backend / Tools）に追加します。

```ts
{ name: 'TypeScript', img: '/img/TypeScript.png' },
```

アイコン画像は `public/img/` に配置してください。

### プロフィール情報を修正する

| 変更したい内容 | 編集するファイル |
|-------------|----------------|
| 自己紹介文・Stats | `app/components/sections/AboutSection.vue` |
| メールアドレス | `app/components/sections/ContactSection.vue` |
| GitHub URL / ソーシャルリンク | `app/components/sections/AboutSection.vue` |
| タイピングアニメーションの役職 | `app/components/sections/HeroSection.vue`（`roles` 配列） |
| ナビリンク | `app/components/layout/AppNav.vue`（`navLinks` 配列） |

---

## デザインのカスタマイズ

`app/assets/css/main.css` の CSS 変数を変更するだけで全体のカラーを調整できます。

```css
:root {
  --bg-start: #0f0f1a;          /* 背景グラデーション開始色 */
  --bg-end: #1a1a2e;            /* 背景グラデーション終了色 */
  --accent-cyan: #06b6d4;       /* アクセントカラー①（シアン） */
  --accent-violet: #7c3aed;     /* アクセントカラー②（バイオレット） */
}
```

---

## トラブルシューティング

### `npm run dev` でエラーが出る

```bash
# node_modules を削除して再インストール
rm -rf node_modules .nuxt
npm install
npm run dev
```

### GitHub Pages にデプロイしてもスタイルが崩れる / 404 になる

`NUXT_APP_BASE_URL` が正しく設定されているか確認してください。
プロジェクトページ（`/リポジトリ名/`）の場合は必ず設定が必要です。

### 画像が表示されない

- 画像が `public/img/` に置かれているか確認する
- パスが `/img/ファイル名.jpg` の形式になっているか確認する（先頭スラッシュあり）

### デプロイ後すぐに反映されない

GitHub Pages の反映には最大 5〜10 分かかる場合があります。
リポジトリの **Actions** タブで `pages-build-deployment` ワークフローの完了を確認してください。

---

## 技術スタック

| カテゴリ | 採用技術 |
|---------|---------|
| Framework | Nuxt 4 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + Nuxt UI v3 |
| Animation | @vueuse/motion |
| Deploy | GitHub Pages (gh-pages) |
