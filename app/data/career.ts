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
    period: '2020年 〜 現在',
    company: '株式会社〇〇〇〇',
    role: 'Web エンジニア',
    description: 'PHP / Laravel を中心としたバックエンド開発。Vue.js によるフロントエンド実装も担当。要件定義・設計・実装・テストまで一貫して携わる。',
  },
  {
    period: '2018年 〜 2020年',
    company: '株式会社〇〇〇〇',
    role: 'Web 制作',
    description: 'HTML / CSS / JavaScript を使用したコーポレートサイト・LP 制作。Bootstrap を活用したレスポンシブデザインを担当。',
  },
]
