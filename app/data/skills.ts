export interface Skill {
  name: string
  img: string
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
      { name: 'HTML', img: '/img/HTML.png' },
      { name: 'CSS', img: '/img/CSS.png' },
      { name: 'JavaScript', img: '/img/Javascript.png' },
      { name: 'Vue.js', img: '/img/Vue.png' },
      { name: 'Bootstrap', img: '/img/BootStrap.png' },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'PHP', img: '/img/PHP.png' },
      { name: 'Laravel', img: '/img/Laravel.png' },
      { name: 'MySQL', img: '/img/MySQL.png' },
    ],
  },
  {
    title: 'Tools',
    icon: '🛠️',
    skills: [
      { name: 'Git', img: '/img/Git.png' },
      { name: 'Linux', img: '/img/Linux.jpg' },
      { name: 'Vagrant', img: '/img/Vagrant.png' },
      { name: 'Docker', img: '/img/Docker.png' },
    ],
  },
]
