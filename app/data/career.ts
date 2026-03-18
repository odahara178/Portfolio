// ============================================================
// 職歴データ（新しい順に並べてください）
// ============================================================

export interface CareerEntry {
  period: string
  company: string
  role: string
  description: string
}

export const careerEntries: CareerEntry[] = [
  {
    period: '2019年 〜 現在',
    company: '株式会社エイト',
    role: 'Web エンジニア',
    description: 'SES業務に従事。Vue.js によるフロントエンド実装も担当。実装・テストを主に担当。長い現場では4年程参画させていただき、nuxt.jsとtypescriptを使用したチーム開発を行っていました。',
  },
  {
    period: '2017年 〜 2019年',
    company: '株式会社ポールトゥウィン',
    role: 'デバッグ',
    description: 'スマートフォンアプリ(ゲームやECサイト)のデバッグ業務を行っておりました。デバッグ業務を通して開発に興味を持ち、侍エンジニアにて学習し転職しています。',
  },
]
