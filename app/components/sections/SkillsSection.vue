<script setup lang="ts">
interface Skill {
  name: string
  color: string
}

interface SkillCategory {
  title: string
  icon: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: '🖥️',
    skills: [
      { name: 'HTML', color: '#e34f26' },
      { name: 'CSS', color: '#1572b6' },
      { name: 'JavaScript', color: '#f7df1e' },
      { name: 'Vue.js', color: '#42b883' },
      { name: 'Bootstrap', color: '#7952b3' },
      { name: 'TypeScript', color: '#3178c6' },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'PHP', color: '#777bb4' },
      { name: 'Laravel', color: '#ff2d20' },
      { name: 'MySQL', color: '#4479a1' },
    ],
  },
  {
    title: 'Tools',
    icon: '🛠️',
    skills: [
      { name: 'Git', color: '#f05032' },
      { name: 'Linux', color: '#fcc624' },
      { name: 'Vagrant', color: '#1563ff' },
      { name: 'Docker', color: '#2496ed' },
    ],
  },
]
</script>

<template>
  <section id="skills" class="section">
    <div class="max-w-5xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-4">
        <h2 class="section-title text-gradient">Skills</h2>
      </div>
      <div class="section-line" />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(category, i) in skillCategories"
          :key="category.title"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: i * 120 } }"
          class="glass rounded-2xl p-6"
        >
          <!-- Category header -->
          <div class="flex items-center gap-3 mb-6">
            <span class="text-2xl leading-none">{{ category.icon }}</span>
            <h3 class="text-lg font-bold text-white">{{ category.title }}</h3>
          </div>

          <!-- Skill pills -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in category.skills"
              :key="skill.name"
              class="skill-pill"
              :style="{ '--dot-color': skill.color }"
            >
              <span class="skill-dot" />
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skill-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.35rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #e2e8f0;
  white-space: nowrap;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.skill-pill:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(6, 182, 212, 0.4);
}

.skill-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--dot-color, #06b6d4);
  flex-shrink: 0;
}
</style>
