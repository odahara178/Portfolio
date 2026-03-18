<script setup lang="ts">
const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/odahara178',
    svg: `<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
  },
  {
    label: 'Email',
    href: 'mailto:odahara178@gmail.com',
    svg: `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
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
        class="about-card"
      >
        <!-- Left column: avatar + socials -->
        <div class="about-left">
          <!-- Avatar circle (CSS only) -->
          <div class="avatar-circle">
            <span class="avatar-initials">H.O</span>
          </div>

          <!-- Social links -->
          <div class="social-links">
            <a
              v-for="s in socials"
              :key="s.label"
              :href="s.href"
              :aria-label="s.label"
              target="_blank"
              rel="noopener"
              class="social-btn"
              v-html="s.svg"
            />
          </div>
        </div>

        <!-- Right column: text -->
        <div class="about-right">
          <h3 class="text-2xl font-bold text-white mb-4">Hiromu Odahara</h3>
          <div class="about-text">
            <p>
              はじめまして。小田原 宏夢（おだはら ひろむ）と申します。
              Web エンジニアとして、フロントエンドからバックエンドまで幅広く経験しています。
            </p>
            <p>
              PHP / Laravel によるサーバーサイド開発を得意とし、
              Vue.js を用いたインタラクティブな UI 実装も経験があります。
            </p>
            <p>
              現在はよりモダンなフロントエンド技術（Nuxt / TypeScript / Tailwind CSS）の習得に注力中です。
            </p>
          </div>

          <!-- Stats -->
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-num cyan">5+</div>
              <div class="stat-label">Years Exp.</div>
            </div>
            <div class="stat-card">
              <div class="stat-num violet">10+</div>
              <div class="stat-label">Projects</div>
            </div>
            <div class="stat-card">
              <div class="stat-num cyan">∞</div>
              <div class="stat-label">Curiosity</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-card {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.25rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

@media (min-width: 768px) {
  .about-card {
    flex-direction: row;
    align-items: flex-start;
    padding: 3rem;
  }
}

.about-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  flex-shrink: 0;
}

.avatar-circle {
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #06b6d4, #7c3aed);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 30px rgba(6, 182, 212, 0.25), 0 0 60px rgba(6, 182, 212, 0.1);
}

.avatar-initials {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  letter-spacing: 0.05em;
}

.social-links {
  display: flex;
  gap: 0.75rem;
}

.social-btn {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  transition: color 0.2s ease, background 0.2s ease;
  text-decoration: none;
}

.social-btn:hover {
  color: #06b6d4;
  background: rgba(6, 182, 212, 0.1);
}

.about-right {
  flex: 1;
  min-width: 0;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: #94a3b8;
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}

.stat-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.75rem;
  padding: 0.875rem 0.5rem;
  text-align: center;
}

.stat-num {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
}

.stat-num.cyan { color: #06b6d4; }
.stat-num.violet { color: #7c3aed; }

.stat-label {
  font-size: 0.7rem;
  color: #64748b;
  margin-top: 0.25rem;
}
</style>
