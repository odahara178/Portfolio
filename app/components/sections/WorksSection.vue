<script setup lang="ts">
import { works } from '~/data/works'
</script>

<template>
  <section id="works" class="section">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
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
          class="glass glass-hover rounded-2xl overflow-hidden flex flex-col"
        >
          <!-- Thumbnail -->
          <div class="relative h-48 overflow-hidden">
            <img
              :src="work.thumbnail"
              :alt="work.title"
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <!-- Content -->
          <div class="flex flex-col flex-1 p-6 gap-4">
            <h3 class="text-lg font-bold text-white">{{ work.title }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed flex-1">{{ work.description }}</p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in work.tags" :key="tag" class="tag-badge">{{ tag }}</span>
            </div>

            <!-- Links -->
            <div class="flex gap-3 pt-1">
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
                class="btn-outline text-sm flex items-center justify-center gap-2"
                aria-label="GitHub"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
