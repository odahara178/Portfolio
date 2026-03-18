<script setup lang="ts">
const roles = [
  'Web エンジニア',
  'フロントエンドエンジニア',
  'バックエンドエンジニア',
  'Vue.js Developer',
]

const displayedRole = ref('')
const roleIndex = ref(0)
const charIndex = ref(0)
const isDeleting = ref(false)

function typeRole() {
  const current = roles[roleIndex.value]!

  if (!isDeleting.value) {
    displayedRole.value = current.slice(0, charIndex.value + 1)
    charIndex.value++
    if (charIndex.value === current.length) {
      isDeleting.value = true
      setTimeout(typeRole, 1800)
      return
    }
  } else {
    displayedRole.value = current.slice(0, charIndex.value - 1)
    charIndex.value--
    if (charIndex.value === 0) {
      isDeleting.value = false
      roleIndex.value = (roleIndex.value + 1) % roles.length
    }
  }

  const speed = isDeleting.value ? 60 : 100
  setTimeout(typeRole, speed)
}

onMounted(() => {
  setTimeout(typeRole, 800)
})

function scrollToWorks() {
  document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })
}

function scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section
    id="home"
    class="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden dot-grid-bg"
  >
    <!-- Background glow blobs -->
    <div
      class="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
      style="background: radial-gradient(circle, #06b6d4, transparent)"
    />
    <div
      class="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
      style="background: radial-gradient(circle, #7c3aed, transparent)"
    />

    <!-- Content -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 700 } }"
      class="relative z-10 px-4 max-w-3xl mx-auto"
    >
      <p class="text-sm font-medium tracking-widest text-cyan-400 uppercase mb-4">
        Welcome to my Portfolio
      </p>

      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
        Hiromu<br />
        <span class="text-gradient">Odahara</span>
      </h1>

      <div class="text-lg sm:text-xl md:text-2xl text-slate-300 font-light mb-10 h-8">
        <span class="typing-cursor glow-cyan-text text-cyan-300 font-medium">{{ displayedRole }}</span>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button class="btn-primary glow-cyan" @click="scrollToWorks">
          Works を見る
        </button>
        <button class="btn-outline" @click="scrollToContact">
          連絡する
        </button>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs">
      <span>scroll</span>
      <div class="w-px h-10 bg-gradient-to-b from-slate-500 to-transparent animate-bounce" />
    </div>
  </section>
</template>
