<script setup lang="ts">
interface Work {
  title: string
  description: string
  accent: string
  tags: string[]
  url?: string
  github?: string
}

const works: Work[] = [
  {
    title: '映画ランキング',
    description:
      '映画をランキング形式で管理・共有できる Web アプリ。Laravel を使ったフルスタック構成で CRUD 機能を実装。',
    accent: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
    tags: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
    url: 'http://movieranking-laravel.herokuapp.com/',
  },
  {
    title: 'なぞなぞアプリ',
    description:
      'ブラウザで遊べるなぞなぞクイズアプリ。JavaScript でランダム出題・正誤判定・スコア集計を実装。',
    accent: 'linear-gradient(135deg, #f7df1e, #f0932b)',
    tags: ['JavaScript', 'HTML', 'CSS'],
    url: 'https://odahara178.github.io/nazonazo//',
    github: 'https://github.com/odahara178/nazonazo',
  },
  {
    title: '本棚アプリ',
    description:
      '読んだ本を記録・管理できる SPA。Vue.js を使い LocalStorage でデータを永続化。コンポーネント設計を意識して実装。',
    accent: 'linear-gradient(135deg, #42b883, #0a7554)',
    tags: ['Vue.js', 'JavaScript', 'CSS'],
    url: 'https://odahara178.github.io/book-self/',
    github: 'https://github.com/odahara178/book-self',
  },
]
</script>

<template>
  <section id="works" class="section">
    <div class="max-w-5xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-4">
        <h2 class="section-title text-gradient">Works</h2>
      </div>
      <div class="section-line" />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(work, i) in works"
          :key="work.title"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: i * 120 } }"
          class="works-card"
        >
          <!-- Color band header -->
          <div class="works-band" :style="{ background: work.accent }">
            <span class="works-title-overlay">{{ work.title }}</span>
          </div>

          <!-- Content -->
          <div class="works-body">
            <h3 class="text-base font-bold text-white mb-2">{{ work.title }}</h3>
            <p class="text-sm text-slate-400 leading-relaxed mb-4">{{ work.description }}</p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-1.5 mb-4">
              <span v-for="tag in work.tags" :key="tag" class="tag-badge">{{ tag }}</span>
            </div>

            <!-- Links -->
            <div class="flex gap-2">
              <a
                v-if="work.url"
                :href="work.url"
                target="_blank"
                rel="noopener"
                class="btn-primary text-sm flex-1 text-center"
              >
                サイトを見る
              </a>
              <a
                v-if="work.github"
                :href="work.github"
                target="_blank"
                rel="noopener"
                class="btn-outline text-sm px-3 flex items-center gap-1.5"
                aria-label="GitHub"
              >
                <svg class="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
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
.works-card {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.works-card:hover {
  transform: translateY(-4px);
  border-color: rgba(6, 182, 212, 0.3);
}

.works-band {
  height: 7rem;
  display: flex;
  align-items: flex-end;
  padding: 1rem 1.25rem;
  position: relative;
  flex-shrink: 0;
}

.works-title-overlay {
  font-size: 1.125rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
}

.works-body {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
