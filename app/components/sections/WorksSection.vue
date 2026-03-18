<script setup lang="ts">
import { works } from '~/data/works'
</script>

<template>
  <section id="works" class="page-section works">
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="works-wrap"
    >
      <div class="works-header">
        <p class="section-label">Works</p>
        <h2 class="section-heading">Projects</h2>
        <div class="section-divider" />
      </div>

      <div class="works-grid">
        <div v-for="w in works" :key="w.title" class="card card-hover w-card">
          <div
            class="w-band"
            :style="{ background: `linear-gradient(135deg, ${w.accent[0]}, ${w.accent[1]})` }"
          >
            <span class="w-band-title">{{ w.title }}</span>
          </div>
          <div class="w-body">
            <p class="w-desc">{{ w.description }}</p>
            <div class="w-tags">
              <span v-for="t in w.tags" :key="t" class="tag">{{ t }}</span>
            </div>
            <div class="w-links">
              <a v-if="w.url" :href="w.url" target="_blank" rel="noopener" class="btn btn-filled w-btn">
                サイトへ
              </a>
              <a v-if="w.github" :href="w.github" target="_blank" rel="noopener" class="btn btn-ghost w-btn">
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.works { background: var(--bg); }

.works-wrap {
  width: 100%;
  max-width: 980px;
  padding: 0 1.25rem;
}

.works-header { margin-bottom: 1.5rem; }

.works-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 540px) { .works-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 900px) { .works-grid { grid-template-columns: repeat(3, 1fr); } }

.w-card { overflow: hidden; display: flex; flex-direction: column; }

.w-band {
  height: 5.5rem;
  display: flex;
  align-items: flex-end;
  padding: 0.75rem 1rem;
  flex-shrink: 0;
}

.w-band-title {
  font-size: 1rem;
  font-weight: 700;
  color: rgba(255,255,255,0.95);
  text-shadow: 0 1px 4px rgba(0,0,0,0.25);
}

.w-body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.75rem;
}

.w-desc { font-size: 0.82rem; color: var(--text-muted); line-height: 1.6; margin: 0; flex: 1; }
.w-tags { display: flex; flex-wrap: wrap; gap: 0.35rem; }
.w-links { display: flex; gap: 0.5rem; }
.w-btn  { padding: 0.45rem 0.9rem; font-size: 0.8rem; }
</style>
