<script setup lang="ts">
import { skillCategories } from '~/data/skills'
</script>

<template>
  <section id="skills" class="section">
    <div class="max-w-5xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-4">
        <h2 class="section-title text-gradient">Skills</h2>
      </div>
      <div class="section-line" />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(category, i) in skillCategories"
          :key="category.title"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: i * 120 } }"
          class="glass glass-hover rounded-2xl p-6"
        >
          <!-- Category header -->
          <div class="flex items-center gap-3 mb-6">
            <span class="text-2xl">{{ category.icon }}</span>
            <h3 class="text-lg font-bold text-white">{{ category.title }}</h3>
          </div>

          <!-- Skill icons -->
          <div class="flex flex-wrap gap-4 justify-center">
            <div
              v-for="skill in category.skills"
              :key="skill.name"
              class="flex flex-col items-center gap-2 group"
            >
              <div class="w-14 h-14 glass rounded-xl flex items-center justify-center p-2 transition-transform duration-200 group-hover:scale-110">
                <img
                  :src="skill.img"
                  :alt="skill.name"
                  class="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <span class="text-xs text-slate-400 group-hover:text-cyan-400 transition-colors duration-200">
                {{ skill.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
