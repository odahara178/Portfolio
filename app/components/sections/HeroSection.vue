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
  setTimeout(typeRole, isDeleting.value ? 60 : 100)
}

onMounted(() => setTimeout(typeRole, 800))
</script>

<template>
  <section id="home" class="hero-section">
    <!-- Glow blobs -->
    <div class="blob blob-cyan" />
    <div class="blob blob-violet" />

    <!-- Content -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 700 } }"
      class="hero-content"
    >
      <p class="hero-eyebrow">Welcome to my Portfolio</p>

      <h1 class="hero-name">
        Hiromu<br />
        <span class="text-gradient">Odahara</span>
      </h1>

      <div class="hero-role-wrap">
        <span class="hero-role typing-cursor">{{ displayedRole }}</span>
      </div>

      <div class="hero-cta">
        <a href="#works" class="btn-primary glow-cyan" @click.prevent="$el.ownerDocument.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })">
          Works を見る
        </a>
        <a href="#contact" class="btn-outline" @click.prevent="$el.ownerDocument.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })">
          連絡する
        </a>
      </div>
    </div>

    <!-- Scroll hint -->
    <div class="scroll-hint">
      <span class="scroll-hint-text">scroll</span>
      <div class="scroll-hint-line" />
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  /* dot grid */
  background-image: radial-gradient(rgba(6, 182, 212, 0.15) 1px, transparent 1px);
  background-size: 32px 32px;
}

.blob {
  position: absolute;
  width: 22rem;
  height: 22rem;
  border-radius: 50%;
  filter: blur(5rem);
  opacity: 0.15;
  pointer-events: none;
}

.blob-cyan {
  top: 20%;
  left: 20%;
  background: radial-gradient(circle, #06b6d4, transparent);
}

.blob-violet {
  bottom: 20%;
  right: 20%;
  background: radial-gradient(circle, #7c3aed, transparent);
}

.hero-content {
  position: relative;
  z-index: 10;
  padding: 0 1rem;
  max-width: 48rem;
  width: 100%;
}

.hero-eyebrow {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #06b6d4;
  margin-bottom: 1.25rem;
}

.hero-name {
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 700;
  line-height: 1.15;
  color: #f1f5f9;
  margin-bottom: 1.5rem;
}

.hero-role-wrap {
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
}

.hero-role {
  font-size: clamp(1rem, 3vw, 1.375rem);
  font-weight: 500;
  color: #22d3ee;
  text-shadow: 0 0 20px rgba(6, 182, 212, 0.5);
}

.hero-cta {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  align-items: center;
}

@media (min-width: 480px) {
  .hero-cta {
    flex-direction: row;
    justify-content: center;
  }
}

.scroll-hint {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #475569;
}

.scroll-hint-text {
  font-size: 0.7rem;
  letter-spacing: 0.1em;
}

.scroll-hint-line {
  width: 1px;
  height: 2.5rem;
  background: linear-gradient(to bottom, #475569, transparent);
  animation: bounce-line 1.5s ease-in-out infinite;
}

@keyframes bounce-line {
  0%, 100% { transform: scaleY(1); opacity: 0.6; }
  50% { transform: scaleY(0.7); opacity: 1; }
}
</style>
