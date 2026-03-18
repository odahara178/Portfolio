<script setup lang="ts">
import { profile } from '~/data/profile'

const { nameFirst, nameLast, initials, email, github } = profile
const { bio, stats } = profile.about

const socials = [
  {
    label: 'GitHub',
    href: github,
    svg: `<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
  },
  {
    label: 'Email',
    href: `mailto:${email}`,
    svg: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
  },
]
</script>

<template>
  <section id="about" class="page-section about">
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="about-wrap"
    >
      <div class="about-header">
        <p class="section-label">About</p>
        <h2 class="section-heading">About Me</h2>
        <div class="section-divider" />
      </div>

      <div class="about-body">
        <!-- Left -->
        <div class="about-left">
          <div class="avatar">
            <span class="avatar-text">{{ initials }}</span>
          </div>
          <div class="socials">
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

        <!-- Right -->
        <div class="about-right">
          <h3 class="about-name">{{ nameFirst }} {{ nameLast }}</h3>
          <p v-for="(para, i) in bio" :key="i" class="about-desc">{{ para }}</p>

          <div class="stats">
            <div v-for="s in stats" :key="s.label" class="stat">
              <span class="stat-num" :class="s.color">{{ s.value }}</span>
              <span class="stat-lbl">{{ s.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about { background: var(--surface); }

.about-wrap {
  width: 100%;
  max-width: 860px;
  padding: 0 1.25rem;
}

.about-header { margin-bottom: 1.5rem; }

.about-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .about-body { flex-direction: row; align-items: flex-start; gap: 2.5rem; }
}

.about-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
}

.avatar {
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #bae6fd, #ddd6fe);
  border: 3px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-text {
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #0891b2, #6d28d9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.socials { display: flex; gap: 0.5rem; }

.social-btn {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  transition: color 0.2s, border-color 0.2s, background 0.2s;
  text-decoration: none;
}

.social-btn:hover { color: #0891b2; border-color: #a5f3fc; background: #f0fdfe; }

.about-right { flex: 1; min-width: 0; }

.about-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 0.75rem;
}

.about-desc {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin: 0 0 0.6rem;
}

.stats {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.25rem;
}

.stat {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.75rem 0.5rem;
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  background: var(--bg);
}

.stat-num { font-size: 1.4rem; font-weight: 800; line-height: 1; }
.stat-num.cyan   { color: #0891b2; }
.stat-num.violet { color: #6d28d9; }
.stat-lbl { font-size: 0.68rem; color: #94a3b8; margin-top: 0.2rem; }
</style>
