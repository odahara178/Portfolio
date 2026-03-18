# Portfolio Hub Site

## 概要
Nuxt 4 + TypeScript + Tailwind CSS v4 + Nuxt UI v3 で構築したダーク・テック系ポートフォリオサイト。
GitHub Pages へ静的デプロイする SPA スクロール型の1ページサイト。

## 技術スタック
- **Framework**: Nuxt 4 (SSG/static generate)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + Nuxt UI v3 + カスタム CSS (`app/assets/css/main.css`)
- **Animation**: @vueuse/motion (スクロールフェードイン)
- **Deploy**: GitHub Pages (`gh-pages` ブランチ)

## ディレクトリ構成

```
app/
├── app.vue                    ← ルートレイアウト（Nav + Page + Footer）
├── pages/
│   └── index.vue             ← メインページ（全セクションを並べるだけ）
├── components/
│   ├── layout/
│   │   ├── AppNav.vue        ← スティッキーナビ（スクロールスパイ付き）
│   │   └── AppFooter.vue
│   └── sections/
│       ├── HeroSection.vue   ← タイピングアニメーション付きヒーロー
│       ├── AboutSection.vue  ← 自己紹介
│       ├── SkillsSection.vue ← スキルカード
│       ├── CareerSection.vue ← 職歴タイムライン
│       ├── WorksSection.vue  ← 制作物グリッド
│       └── ContactSection.vue
├── data/
│   ├── skills.ts             ← スキルデータ（ここを編集）
│   ├── career.ts             ← 職歴データ（ここを編集）
│   └── works.ts              ← 制作物データ（ここを編集）
└── assets/css/
    └── main.css              ← グローバルスタイル・カスタム CSS
public/
└── img/                      ← スキルアイコン・Works サムネイル画像
```

## ローカル開発

```bash
npm install
npm run dev       # http://localhost:3000
```

## ビルド・デプロイ

```bash
# 静的ビルド（.output/public/ に生成）
npm run generate

# GitHub Pages へデプロイ（gh-pages パッケージ使用）
npm run deploy

# サブディレクトリ配置の場合（例: /Portfolio/）
NUXT_APP_BASE_URL=/Portfolio/ npm run deploy
```

## コンテンツ追加方法

### Works（制作物）を追加する
`app/data/works.ts` に配列要素を追加：
```ts
{
  title: 'プロジェクト名',
  description: '説明文',
  thumbnail: '/img/thumbnail.jpg',  // public/img/ に画像を置く
  tags: ['Vue.js', 'TypeScript'],
  url: 'https://...',           // 省略可
  github: 'https://github.com/...',  // 省略可
},
```

### Career（職歴）を追加する
`app/data/career.ts` に配列要素を追加（新しい順）：
```ts
{
  period: '2024年 〜 現在',
  company: '株式会社〇〇',
  role: 'フロントエンドエンジニア',
  description: '担当内容の説明',
},
```

### Skills（スキル）を追加する
`app/data/skills.ts` の該当カテゴリに追加：
```ts
{ name: 'TypeScript', img: '/img/TypeScript.png' },
```
アイコン画像は `public/img/` に配置。

## デザイントークン
- 背景: `#0f0f1a → #1a1a2e`
- アクセント cyan: `#06b6d4`
- アクセント violet: `#7c3aed`
- カスタムクラス: `.glass`, `.text-gradient`, `.glow-cyan`, `.glow-violet`, `.btn-primary`, `.btn-outline`
