export interface Work {
  title: string
  description: string
  thumbnail: string
  tags: string[]
  url?: string
  github?: string
}

export const works: Work[] = [
  {
    title: '映画ランキング',
    description:
      '映画をランキング形式で管理・共有できる Web アプリ。Laravel を使ったフルスタック構成で CRUD 機能を実装。',
    thumbnail: '/img/caspar-camille-rubin-220711-unsplash.jpg',
    tags: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
    url: 'http://movieranking-laravel.herokuapp.com/',
  },
  {
    title: 'なぞなぞアプリ',
    description:
      'ブラウザで遊べるなぞなぞクイズアプリ。JavaScript でランダム出題・正誤判定・スコア集計を実装。',
    thumbnail: '/img/luca-bravo-217276-unsplash.jpg',
    tags: ['JavaScript', 'HTML', 'CSS'],
    url: 'https://odahara178.github.io/nazonazo//',
    github: 'https://github.com/odahara178/nazonazo',
  },
  {
    title: '本棚アプリ',
    description:
      '読んだ本を記録・管理できる SPA。Vue.js を使い LocalStorage でデータを永続化。コンポーネント設計を意識して実装。',
    thumbnail: '/img/philipp-katzenberger-1313578-unsplash.jpg',
    tags: ['Vue.js', 'JavaScript', 'CSS'],
    url: 'https://odahara178.github.io/book-self/',
    github: 'https://github.com/odahara178/book-self',
  },
]
