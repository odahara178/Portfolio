<script setup lang="ts">
import { careerEntries } from '~/data/career'
</script>

<template>
  <section id="career" class="section">
    <div class="career-wrap">
      <div class="text-center mb-4">
        <h2 class="section-title text-gradient">Career</h2>
      </div>
      <div class="section-line" />

      <!-- Timeline -->
      <div class="timeline">
        <div class="timeline-track" />

        <div
          v-for="(entry, i) in careerEntries"
          :key="i"
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 500, delay: i * 150 } }"
          class="timeline-item"
        >
          <div class="timeline-dot" />
          <div class="timeline-card">
            <span class="career-period">{{ entry.period }}</span>
            <h3 class="career-company">{{ entry.company }}</h3>
            <p class="career-role">{{ entry.role }}</p>
            <p class="career-desc">{{ entry.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.career-wrap {
  max-width: 42rem;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .career-wrap { padding: 0 1.5rem; }
}

.timeline {
  position: relative;
  padding-left: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.timeline-track {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, #06b6d4, #7c3aed);
  border-radius: 9999px;
}

.timeline-item {
  position: relative;
}

.timeline-dot {
  position: absolute;
  left: -1.875rem;
  top: 1.25rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #06b6d4;
  box-shadow: 0 0 10px rgba(6, 182, 212, 0.6);
}

.timeline-card {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  padding: 1.25rem 1.5rem;
}

.career-period {
  display: block;
  font-family: monospace;
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  color: #06b6d4;
  margin-bottom: 0.25rem;
}

.career-company {
  font-size: 1.05rem;
  font-weight: 700;
  color: #f1f5f9;
  margin-bottom: 0.2rem;
}

.career-role {
  font-size: 0.85rem;
  font-weight: 500;
  color: #7c3aed;
  margin-bottom: 0.75rem;
}

.career-desc {
  font-size: 0.875rem;
  color: #94a3b8;
  line-height: 1.65;
}
</style>
