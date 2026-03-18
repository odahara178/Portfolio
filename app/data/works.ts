// ============================================================
// 制作物データ
// 新しい Works を追加するときはここに追記するだけです
// ============================================================

export interface Work {
  title: string
  description: string
  /** カラーバンドのグラデーション（[開始色, 終了色]） */
  accent: [string, string]
  tags: string[]
  /** 公開サイト URL（省略可） */
  url?: string
  /** GitHub リポジトリ URL（省略可） */
  github?: string
}

export const works: Work[] = [
  {
    title: '映画ランキング',
    description: 'Laravel を使ったフルスタック構成で映画をランキング管理・共有できる Web アプリ。CRUD 機能を実装。',
    accent: ['#ff6b6b', '#ee5a24'],
    tags: ['PHP', 'Laravel', 'MySQL'],
    url: 'http://movieranking-laravel.herokuapp.com/',
  },
  {
    title: 'なぞなぞアプリ',
    description: 'JavaScript でランダム出題・正誤判定・スコア集計を実装したブラウザクイズアプリ。',
    accent: ['#0891b2', '#6d28d9'],
    tags: ['JavaScript', 'HTML', 'CSS'],
    url: 'https://odahara178.github.io/nazonazo//',
    github: 'https://github.com/odahara178/nazonazo',
  },
  {
    title: '本棚アプリ',
    description: '読んだ本を記録・管理できる SPA。Vue.js + LocalStorage でデータ永続化、コンポーネント設計を意識。',
    accent: ['#42b883', '#0a7554'],
    tags: ['Vue.js', 'JavaScript'],
    url: 'https://odahara178.github.io/book-self/',
    github: 'https://github.com/odahara178/book-self',
  },
]
