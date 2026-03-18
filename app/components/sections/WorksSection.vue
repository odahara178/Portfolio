<script setup lang="ts">
const works = [
  {
    title: '映画ランキング',
    desc: 'Laravel を使ったフルスタック構成で映画をランキング管理・共有できる Web アプリ。CRUD 機能を実装。',
    accent: ['#ff6b6b', '#ee5a24'],
    tags: ['PHP', 'Laravel', 'MySQL'],
    url: 'http://movieranking-laravel.herokuapp.com/',
  },
  {
    title: 'なぞなぞアプリ',
    desc: 'JavaScript でランダム出題・正誤判定・スコア集計を実装したブラウザクイズアプリ。',
    accent: ['#0891b2', '#6d28d9'],
    tags: ['JavaScript', 'HTML', 'CSS'],
    url: 'https://odahara178.github.io/nazonazo//',
    github: 'https://github.com/odahara178/nazonazo',
  },
  {
    title: '本棚アプリ',
    desc: '読んだ本を記録・管理できる SPA。Vue.js + LocalStorage でデータ永続化、コンポーネント設計を意識。',
    accent: ['#42b883', '#0a7554'],
    tags: ['Vue.js', 'JavaScript'],
    url: 'https://odahara178.github.io/book-self/',
    github: 'https://github.com/odahara178/book-self',
  },
]
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
          <!-- Color band -->
          <div class="w-band" :style="{ background: `linear-gradient(135deg, ${w.accent[0]}, ${w.accent[1]})` }">
            <span class="w-band-title">{{ w.title }}</span>
          </div>
          <!-- Body -->
          <div class="w-body">
            <p class="w-desc">{{ w.desc }}</p>
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

@media (min-width: 540px) {
  .works-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 900px) {
  .works-grid { grid-template-columns: repeat(3, 1fr); }
}

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

.w-desc {
  font-size: 0.82rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
  flex: 1;
}

.w-tags { display: flex; flex-wrap: wrap; gap: 0.35rem; }

.w-links { display: flex; gap: 0.5rem; }

.w-btn { padding: 0.45rem 0.9rem; font-size: 0.8rem; }
</style>
