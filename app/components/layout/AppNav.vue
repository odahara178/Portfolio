<script setup lang="ts">
const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'career', label: 'Career' },
  { id: 'works', label: 'Works' },
  { id: 'contact', label: 'Contact' },
]

const isScrolled = ref(false)
const activeSection = ref('home')
const mobileMenuOpen = ref(false)

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  mobileMenuOpen.value = false
}

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 40
    for (const link of [...navLinks].reverse()) {
      const el = document.getElementById(link.id)
      if (el && window.scrollY >= el.offsetTop - 120) {
        activeSection.value = link.id
        break
      }
    }
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>

<template>
  <nav class="nav" :class="{ 'nav--scrolled': isScrolled }">
    <div class="nav-inner">
      <button class="nav-logo text-gradient" @click="scrollTo('home')">
        H.Odahara
      </button>

      <!-- Desktop -->
      <ul class="nav-links">
        <li v-for="link in navLinks" :key="link.id">
          <button
            class="nav-link"
            :class="{ 'nav-link--active': activeSection === link.id }"
            @click="scrollTo(link.id)"
          >
            {{ link.label }}
          </button>
        </li>
      </ul>

      <!-- Mobile hamburger -->
      <button class="nav-hamburger" aria-label="メニュー" @click="mobileMenuOpen = !mobileMenuOpen">
        <svg v-if="!mobileMenuOpen" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition name="mobile-menu">
      <ul v-if="mobileMenuOpen" class="mobile-menu">
        <li v-for="link in navLinks" :key="link.id">
          <button
            class="mobile-link"
            :class="{ 'mobile-link--active': activeSection === link.id }"
            @click="scrollTo(link.id)"
          >
            {{ link.label }}
          </button>
        </li>
      </ul>
    </Transition>
  </nav>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  transition: background 0.3s ease, border-color 0.3s ease;
}

.nav--scrolled {
  background: rgba(15, 15, 26, 0.88);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.nav-inner {
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (min-width: 640px) {
  .nav-inner { padding: 0 1.5rem; }
}

.nav-logo {
  font-size: 1.1rem;
  font-weight: 700;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.nav-links {
  display: none;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1.5rem;
  align-items: center;
}

@media (min-width: 768px) {
  .nav-links { display: flex; }
}

.nav-link {
  font-size: 0.875rem;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  color: #94a3b8;
  transition: color 0.2s ease;
  padding: 0.25rem 0;
}

.nav-link:hover { color: #f1f5f9; }
.nav-link--active { color: #06b6d4 !important; }

.nav-hamburger {
  display: flex;
  background: none;
  border: none;
  cursor: pointer;
  color: #94a3b8;
  padding: 0.375rem;
  border-radius: 0.5rem;
  transition: color 0.2s ease;
}

.nav-hamburger:hover { color: #f1f5f9; }

@media (min-width: 768px) {
  .nav-hamburger { display: none; }
}

.mobile-menu {
  list-style: none;
  margin: 0 0.5rem 0.75rem;
  padding: 0.75rem;
  background: rgba(15, 15, 26, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.875rem;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.mobile-link {
  display: block;
  width: 100%;
  text-align: left;
  padding: 0.625rem 0.875rem;
  border-radius: 0.625rem;
  font-size: 0.875rem;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  color: #94a3b8;
  transition: color 0.2s ease, background 0.2s ease;
}

.mobile-link:hover {
  color: #f1f5f9;
  background: rgba(255, 255, 255, 0.05);
}

.mobile-link--active {
  color: #06b6d4;
  background: rgba(6, 182, 212, 0.08);
}

/* Transition */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-0.5rem);
}
</style>
