// ============================================================
// プロフィール全体のコンテンツ定義
// ここを編集するだけで全セクションの文言が変わります
// ============================================================

export const profile = {
  // ── 基本情報 ──────────────────────────────────────────────
  nameFirst: 'Hiromu',
  nameLast: 'Odahara',
  initials: 'H.O',
  email: 'odahara178@gmail.com',
  github: 'https://github.com/odahara178',

  // ── Hero セクション ───────────────────────────────────────
  hero: {
    label: 'Portfolio',
    /** タイピングアニメーションで順番に表示される役職 */
    roles: [
      'Web エンジニア',
      'Vue.js Developer',
      'フロントエンドエンジニア',
      'バックエンドエンジニア',
    ],
    /** 役職の下に表示するキャッチコピー */
    tagline: 'Vue.js (主にNuxt.js)を中心に、フロント〜バック幅広く対応できる Web エンジニア。',
    ctaPrimary: 'Works を見る',
    ctaSecondary: 'Contact',
  },

  // ── About セクション ──────────────────────────────────────
  about: {
    /** 自己紹介文（段落ごとに配列で追加可能） */
    bio: [
      'Vue.js / Nuxt.jsを使ったフロントエンド実装を経験しているWeb エンジニアです。バックエンド開発（PHP、SQL）にも知見はあります',
      '現在は要件定義等の上流工程、知識としての資格取得（応用情報）、AI開発（Claude code）に興味があり学習中です',
    ],
    /** アバター下の数値ハイライト（color: 'cyan' | 'violet'） */
    stats: [
      { value: '5+', label: 'Years Exp.', color: 'cyan' as const },
      { value: '10+', label: 'Projects', color: 'violet' as const },
      { value: '∞', label: 'Curiosity', color: 'cyan' as const },
    ],
  },

  // ── Contact セクション ────────────────────────────────────
  contact: {
    message: 'お仕事のご依頼・ご相談・情報交換など、お気軽にご連絡ください。',
    note: '通常 1〜2 営業日以内にご返信します。',
    emailLabel: 'メールで連絡する',
    githubLabel: 'GitHub を見る',
  },
}
