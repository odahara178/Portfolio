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
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
  mobileMenuOpen.value = false
}

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 40

    // Scroll-spy: find which section is in view
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
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'nav-scrolled' : 'nav-top'"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <button
          class="text-lg font-bold text-gradient cursor-pointer"
          @click="scrollTo('home')"
        >
          H.Odahara
        </button>

        <!-- Desktop Links -->
        <ul class="hidden md:flex items-center gap-6">
          <li v-for="link in navLinks" :key="link.id">
            <button
              class="nav-link text-sm font-medium transition-colors duration-200"
              :class="activeSection === link.id ? 'nav-link-active' : 'text-slate-300 hover:text-white'"
              @click="scrollTo(link.id)"
            >
              {{ link.label }}
            </button>
          </li>
        </ul>

        <!-- Mobile Hamburger -->
        <button
          class="md:hidden p-2 rounded-lg text-slate-300 hover:text-white transition-colors"
          aria-label="メニューを開く"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition-all duration-200"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <ul v-if="mobileMenuOpen" class="md:hidden glass rounded-xl mx-2 mb-3 py-3 px-4 flex flex-col gap-1">
          <li v-for="link in navLinks" :key="link.id">
            <button
              class="w-full text-left py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200"
              :class="activeSection === link.id ? 'text-cyan-400 bg-cyan-500/10' : 'text-slate-300 hover:text-white hover:bg-white/5'"
              @click="scrollTo(link.id)"
            >
              {{ link.label }}
            </button>
          </li>
        </ul>
      </Transition>
    </div>
  </nav>
</template>

<style scoped>
.nav-scrolled {
  background: rgba(15, 15, 26, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.nav-top {
  background: transparent;
}
</style>
