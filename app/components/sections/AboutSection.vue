<script setup lang="ts">
const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/odahara178',
    icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
  },
  {
    label: 'Email',
    href: 'mailto:odahara178@gmail.com',
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
  },
]
</script>

<template>
  <section id="about" class="section">
    <div class="max-w-5xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-4">
        <h2 class="section-title text-gradient">About Me</h2>
      </div>
      <div class="section-line" />

      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="glass rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center"
      >
        <!-- Avatar -->
        <div class="flex-shrink-0 flex flex-col items-center gap-6">
          <div
            class="w-36 h-36 rounded-full glass glow-cyan flex items-center justify-center text-6xl"
          >
            👨‍💻
          </div>

          <!-- Social links -->
          <div class="flex gap-3">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              :aria-label="social.label"
              target="_blank"
              rel="noopener"
              class="w-10 h-10 glass rounded-full flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors duration-200"
              v-html="social.icon"
            />
          </div>
        </div>

        <!-- Text -->
        <div class="space-y-4 text-slate-300 leading-relaxed">
          <h3 class="text-2xl font-bold text-white">Hiromu Odahara</h3>
          <p>
            はじめまして。小田原 宏夢（おだはら ひろむ）と申します。
            Web エンジニアとして、フロントエンドからバックエンドまで幅広く経験しています。
          </p>
          <p>
            PHP / Laravel によるサーバーサイド開発を得意とし、
            Vue.js を用いたインタラクティブな UI 実装も経験があります。
            チームでの開発はもちろん、個人での企画・設計・実装まで一気通貫で対応できます。
          </p>
          <p>
            現在はよりモダンなフロントエンド技術（Nuxt / TypeScript / Tailwind CSS）の習得に注力中です。
            新しい技術への好奇心を持ちながら、ユーザーにとって使いやすいプロダクトを作ることに情熱を持っています。
          </p>

          <!-- Key stats -->
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
            <div class="glass rounded-xl p-4 text-center">
              <div class="text-2xl font-bold text-cyan-400">5+</div>
              <div class="text-xs text-slate-400 mt-1">Years Experience</div>
            </div>
            <div class="glass rounded-xl p-4 text-center">
              <div class="text-2xl font-bold text-violet-400">10+</div>
              <div class="text-xs text-slate-400 mt-1">Projects</div>
            </div>
            <div class="glass rounded-xl p-4 text-center col-span-2 sm:col-span-1">
              <div class="text-2xl font-bold text-cyan-400">∞</div>
              <div class="text-xs text-slate-400 mt-1">Curiosity</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
