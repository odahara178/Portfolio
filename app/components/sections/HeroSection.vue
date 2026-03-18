<script setup lang="ts">
const roles = ['Web エンジニア', 'Vue.js Developer', 'フロントエンドエンジニア', 'バックエンドエンジニア']
const displayed = ref('')
const ri = ref(0)
const ci = ref(0)
const del = ref(false)

function tick() {
  const cur = roles[ri.value]!
  if (!del.value) {
    displayed.value = cur.slice(0, ++ci.value)
    if (ci.value === cur.length) { del.value = true; setTimeout(tick, 1800); return }
  } else {
    displayed.value = cur.slice(0, --ci.value)
    if (ci.value === 0) { del.value = false; ri.value = (ri.value + 1) % roles.length }
  }
  setTimeout(tick, del.value ? 55 : 95)
}
onMounted(() => setTimeout(tick, 700))
</script>

<template>
  <section id="home" class="page-section hero">
    <!-- Decorative blobs -->
    <div class="blob b1" />
    <div class="blob b2" />

    <div
      v-motion
      :initial="{ opacity: 0, y: 30 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="hero-body"
    >
      <p class="section-label">Portfolio</p>

      <h1 class="hero-name">
        Hiromu <span class="text-accent">Odahara</span>
      </h1>

      <div class="hero-role-row">
        <span class="hero-role typing-cursor">{{ displayed }}</span>
      </div>

      <p class="hero-sub">
        PHP / Laravel・Vue.js を中心に、<br class="sp" />フロント〜バック幅広く対応できる Web エンジニア。
      </p>

      <div class="hero-cta">
        <button class="btn btn-filled" @click="$el.ownerDocument.getElementById('works')?.scrollIntoView({behavior:'smooth'})">
          Works を見る
        </button>
        <button class="btn btn-ghost" @click="$el.ownerDocument.getElementById('contact')?.scrollIntoView({behavior:'smooth'})">
          Contact
        </button>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="scroll-ind">
      <span>scroll</span>
      <div class="scroll-line" />
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: linear-gradient(145deg, #f0f9ff 0%, #faf5ff 60%, #f8fafc 100%);
  overflow: hidden;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  pointer-events: none;
  opacity: 0.45;
}
.b1 { width: 350px; height: 350px; background: #bae6fd; top: -80px; right: -60px; }
.b2 { width: 280px; height: 280px; background: #ddd6fe; bottom: -60px; left: -40px; }

.hero-body {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 0 1.25rem;
  max-width: 620px;
  width: 100%;
}

.hero-name {
  font-size: clamp(2.2rem, 6vw, 3.75rem);
  font-weight: 800;
  line-height: 1.1;
  color: var(--text);
  margin: 0 0 1rem;
}

.hero-role-row {
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.hero-role {
  font-size: clamp(0.95rem, 2.5vw, 1.2rem);
  font-weight: 600;
  color: var(--cyan);
}

.hero-sub {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin: 0 0 2rem;
}

.sp { display: none; }
@media (max-width: 480px) { .sp { display: inline; } }

.hero-cta {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
}

.scroll-ind {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  color: #94a3b8;
}

.scroll-line {
  width: 1px;
  height: 2rem;
  background: linear-gradient(to bottom, #94a3b8, transparent);
  animation: pulse-down 1.4s ease-in-out infinite;
}

@keyframes pulse-down {
  0%, 100% { opacity: 0.5; transform: scaleY(1); }
  50%       { opacity: 1;   transform: scaleY(0.75); }
}
</style>
