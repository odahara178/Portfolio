<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { works } from '~/data/works'

const slider = ref<HTMLElement>()
const current = ref(0)

function slideTo(index: number) {
  if (!slider.value) return
  const card = slider.value.querySelectorAll('.w-card')[index] as HTMLElement
  card?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
  current.value = index
}

function slide(dir: 'prev' | 'next') {
  const next = dir === 'next'
    ? Math.min(current.value + 1, works.length - 1)
    : Math.max(current.value - 1, 0)
  slideTo(next)
}

function onScroll() {
  if (!slider.value) return
  const scrollLeft = slider.value.scrollLeft
  const cardWidth = (slider.value.querySelector('.w-card') as HTMLElement)?.offsetWidth ?? 1
  current.value = Math.round(scrollLeft / (cardWidth + 24))
}

onMounted(() => slider.value?.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => slider.value?.removeEventListener('scroll', onScroll))
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

      <div ref="slider" class="works-slider">
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

      <!-- ドットナビゲーション -->
      <div class="slider-nav">
        <button class="nav-arrow" aria-label="前へ" @click="slide('prev')">‹</button>
        <div class="dots">
          <button
            v-for="(_, i) in works"
            :key="i"
            class="dot"
            :class="{ active: current === i }"
            :aria-label="`${i + 1}枚目`"
            @click="slideTo(i)"
          />
        </div>
        <button class="nav-arrow" aria-label="次へ" @click="slide('next')">›</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.works { background: var(--bg); }

.works-wrap {
  width: 100%;
  max-width: 1100px;
  padding: 0 1.25rem;
}

.works-header { margin-bottom: 1.5rem; }

/* ── スライダー本体 ── */
.works-slider {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 0.5rem 0.25rem 0.75rem;
}
.works-slider::-webkit-scrollbar { display: none; }

/* ── カード ── */
.w-card {
  flex: 0 0 min(340px, 82vw);
  scroll-snap-align: start;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

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

/* ── ドットナビゲーション ── */
.slider-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1rem;
}

.dots {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: var(--border);
  cursor: pointer;
  padding: 0;
  transition: background 0.2s, transform 0.2s, width 0.2s;
}

.dot.active {
  background: var(--cyan);
  width: 22px;
  border-radius: 9999px;
  transform: none;
}

.nav-arrow {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1.5px solid var(--border);
  background: var(--surface);
  color: var(--text);
  font-size: 1.25rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
}
.nav-arrow:hover {
  border-color: var(--cyan);
  background: var(--bg);
}
</style>
