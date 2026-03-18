// ============================================================
// スキル一覧データ
// skills 配列に { name, color } を追加するだけで表示に反映されます
// ============================================================

export interface Skill {
  name: string
  /** ドットに使うカラーコード */
  color: string
}

export interface SkillCategory {
  title: string
  icon: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: '🖥️',
    skills: [
      { name: 'HTML',       color: '#e34f26' },
      { name: 'CSS',        color: '#1572b6' },
      { name: 'JavaScript', color: '#c49a00' },
      { name: 'Vue.js',     color: '#42b883' },
      { name: 'Nuxt.js',     color: '#004425' },
      { name: 'Bootstrap',  color: '#7952b3' },
      { name: 'TypeScript', color: '#3178c6' },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'PHP',     color: '#777bb4' },
      { name: 'Laravel', color: '#ff2d20' },
      { name: 'MySQL',   color: '#4479a1' },
    ],
  },
  {
    title: 'Tools',
    icon: '🛠️',
    skills: [
      { name: 'Git',     color: '#f05032' },
      { name: 'Linux',   color: '#c49a00' },
      { name: 'Vagrant', color: '#1563ff' },
      { name: 'Docker',  color: '#2496ed' },
      { name: 'Claude code',  color: '#e624ed' },
      { name: 'Chat GPT',  color: '#24ed99' },
      { name: 'codex',  color: '#24cfed' },
    ],
  },
]
