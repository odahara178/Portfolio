<script setup lang="ts">
import { careerEntries } from '~/data/career'
</script>

<template>
  <section id="career" class="section">
    <div class="max-w-3xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-4">
        <h2 class="section-title text-gradient">Career</h2>
      </div>
      <div class="section-line" />

      <!-- Timeline -->
      <div class="relative pl-8">
        <!-- Vertical line -->
        <div class="timeline-line rounded-full" />

        <div class="flex flex-col gap-10">
          <div
            v-for="(entry, i) in careerEntries"
            :key="i"
            v-motion
            :initial="{ opacity: 0, x: -20 }"
            :visible="{ opacity: 1, x: 0, transition: { duration: 500, delay: i * 150 } }"
            class="relative"
          >
            <!-- Dot -->
            <div class="timeline-dot" />

            <!-- Card -->
            <div class="glass rounded-xl p-6 ml-4">
              <span class="text-xs font-mono text-cyan-400 tracking-wider">
                {{ entry.period }}
              </span>
              <h3 class="text-lg font-bold text-white mt-1">{{ entry.company }}</h3>
              <p class="text-sm font-medium text-violet-400 mb-3">{{ entry.role }}</p>
              <p class="text-slate-300 text-sm leading-relaxed">{{ entry.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
