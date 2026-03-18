<script setup lang="ts">
import { skillCategories } from '~/data/skills'
</script>

<template>
  <section id="skills" class="page-section skills">
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="skills-wrap"
    >
      <div class="skills-header">
        <p class="section-label">Skills</p>
        <h2 class="section-heading">Tech Stack</h2>
        <div class="section-divider" />
      </div>

      <div class="skills-grid">
        <div v-for="cat in skillCategories" :key="cat.title" class="card cat-card">
          <div class="cat-head">
            <span class="cat-icon">{{ cat.icon }}</span>
            <span class="cat-title">{{ cat.title }}</span>
          </div>
          <div class="pills">
            <span v-for="s in cat.skills" :key="s.name" class="skill-pill">
              <span class="skill-dot" :style="{ background: s.color }" />
              {{ s.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills { background: var(--bg); }

.skills-wrap {
  width: 100%;
  max-width: 900px;
  padding: 0 1.25rem;
}

.skills-header { margin-bottom: 1.5rem; }

.skills-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.875rem;
}

@media (min-width: 600px) {
  .skills-grid { grid-template-columns: repeat(3, 1fr); }
}

.cat-card { padding: 1.25rem 1.25rem 1.5rem; }

.cat-head {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border);
}

.cat-icon { font-size: 1.1rem; line-height: 1; }
.cat-title { font-size: 0.9rem; font-weight: 700; color: var(--text); }

.pills { display: flex; flex-wrap: wrap; gap: 0.4rem; }
</style>
