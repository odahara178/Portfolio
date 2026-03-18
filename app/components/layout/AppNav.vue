<script setup lang="ts">
const navLinks = [
  { id: 'home',    label: 'Home' },
  { id: 'about',   label: 'About' },
  { id: 'skills',  label: 'Skills' },
  { id: 'career',  label: 'Career' },
  { id: 'works',   label: 'Works' },
  { id: 'contact', label: 'Contact' },
]

const active = ref('home')
const menuOpen = ref(false)

function goTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  menuOpen.value = false
}

onMounted(() => {
  const obs = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) active.value = e.target.id
      }
    },
    { threshold: 0.5 },
  )
  navLinks.forEach(({ id }) => {
    const el = document.getElementById(id)
    if (el) obs.observe(el)
  })
  onUnmounted(() => obs.disconnect())
})
</script>

<template>
  <nav class="nav">
    <div class="nav-inner">
      <button class="logo" @click="goTo('home')">H.Odahara</button>

      <!-- Desktop -->
      <ul class="links">
        <li v-for="l in navLinks" :key="l.id">
          <button class="link" :class="{ active: active === l.id }" @click="goTo(l.id)">
            {{ l.label }}
          </button>
        </li>
      </ul>

      <!-- Mobile toggle -->
      <button class="hamburger" @click="menuOpen = !menuOpen" aria-label="メニュー">
        <span class="bar" :class="{ open: menuOpen }" />
        <span class="bar mid" :class="{ open: menuOpen }" />
        <span class="bar" :class="{ open: menuOpen }" />
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition name="slide">
      <ul v-if="menuOpen" class="mobile-menu">
        <li v-for="l in navLinks" :key="l.id">
          <button class="mobile-link" :class="{ active: active === l.id }" @click="goTo(l.id)">
            {{ l.label }}
          </button>
        </li>
      </ul>
    </Transition>
  </nav>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: rgba(248, 250, 252, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid #e2e8f0;
  height: 60px;
}

.nav-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.25rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 1rem;
  font-weight: 800;
  background: linear-gradient(135deg, #0891b2, #6d28d9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  border: none;
  cursor: pointer;
  padding: 0;
  letter-spacing: 0.02em;
}

.links {
  display: none;
  list-style: none;
  margin: 0; padding: 0;
  gap: 0.25rem;
}

@media (min-width: 768px) { .links { display: flex; } }

.link {
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.35rem 0.75rem;
  border-radius: 0.5rem;
  border: none;
  background: transparent;
  color: #64748b;
  cursor: pointer;
  transition: color 0.15s ease, background 0.15s ease;
}

.link:hover { color: #0f172a; background: #f1f5f9; }
.link.active { color: #0891b2; background: #e0f7fa; font-weight: 600; }

.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

@media (min-width: 768px) { .hamburger { display: none; } }

.bar {
  display: block;
  width: 22px;
  height: 2px;
  background: #64748b;
  border-radius: 2px;
  transition: all 0.25s ease;
}

.bar.mid.open { opacity: 0; }
.bar.open:first-child { transform: translateY(7px) rotate(45deg); }
.bar.open:last-child  { transform: translateY(-7px) rotate(-45deg); }

.mobile-menu {
  list-style: none;
  margin: 0; padding: 0.5rem 0.75rem 0.75rem;
  background: rgba(248, 250, 252, 0.97);
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.mobile-link {
  display: block;
  width: 100%;
  text-align: left;
  padding: 0.6rem 0.875rem;
  border-radius: 0.625rem;
  font-size: 0.875rem;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  color: #334155;
  transition: color 0.15s, background 0.15s;
}

.mobile-link:hover { background: #f1f5f9; }
.mobile-link.active { color: #0891b2; background: #e0f7fa; font-weight: 600; }

.slide-enter-active, .slide-leave-active {
  transition: all 0.2s ease;
}
.slide-enter-from, .slide-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
