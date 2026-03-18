<script setup lang="ts">
import { careerEntries } from '~/data/career'
</script>

<template>
  <section id="career" class="page-section career">
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="career-wrap"
    >
      <div class="career-header">
        <p class="section-label">Career</p>
        <h2 class="section-heading">Experience</h2>
        <div class="section-divider" />
      </div>

      <div class="timeline">
        <div class="t-track" />
        <div v-for="(e, i) in careerEntries" :key="i" class="t-item">
          <div class="t-dot" />
          <div class="card t-card">
            <span class="t-period">{{ e.period }}</span>
            <div class="t-header">
              <h3 class="t-company">{{ e.company }}</h3>
              <span class="t-role">{{ e.role }}</span>
            </div>
            <p class="t-desc">{{ e.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.career { background: var(--surface); }

.career-wrap {
  width: 100%;
  max-width: 640px;
  padding: 0 1.25rem;
}

.career-header { margin-bottom: 1.5rem; }

.timeline {
  position: relative;
  padding-left: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.t-track {
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #0891b2, #6d28d9);
  border-radius: 9px;
}

.t-item { position: relative; }

.t-dot {
  position: absolute;
  left: -1.625rem;
  top: 1.1rem;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #0891b2;
  border: 2px solid white;
  box-shadow: 0 0 0 2px #a5f3fc;
}

.t-card { padding: 1rem 1.25rem; }

.t-period {
  display: block;
  font-size: 0.72rem;
  font-family: monospace;
  letter-spacing: 0.04em;
  color: #0891b2;
  margin-bottom: 0.3rem;
  font-weight: 600;
}

.t-header {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.t-company {
  font-size: 0.975rem;
  font-weight: 700;
  color: var(--text);
  margin: 0;
}

.t-role {
  font-size: 0.78rem;
  font-weight: 600;
  color: #6d28d9;
  background: var(--violet-light);
  padding: 0.15rem 0.55rem;
  border-radius: 9999px;
}

.t-desc {
  font-size: 0.83rem;
  color: var(--text-muted);
  line-height: 1.65;
  margin: 0;
}
</style>
