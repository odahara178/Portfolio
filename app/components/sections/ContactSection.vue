<template>
  <section id="contact" class="page-section contact">
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="contact-wrap"
    >
      <p class="section-label" style="text-align:center">Contact</p>
      <h2 class="section-heading" style="text-align:center">Get in Touch</h2>
      <div class="section-divider" style="margin:0 auto 1.75rem" />

      <div class="card contact-card">
        <p class="contact-msg">
          お仕事のご依頼・ご相談・情報交換など、お気軽にご連絡ください。
        </p>

        <div class="contact-btns">
          <a href="mailto:odahara178@gmail.com" class="btn btn-filled">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            odahara178@gmail.com
          </a>
          <a href="https://github.com/odahara178" target="_blank" rel="noopener" class="btn btn-ghost">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>

        <p class="contact-note">通常 1〜2 営業日以内にご返信します。</p>
      </div>
    </div>

    <!-- Footer inside last section -->
    <p class="footer-txt">© {{ new Date().getFullYear() }} Hiromu Odahara</p>
  </section>
</template>

<style scoped>
.contact { background: var(--surface); }

.contact-wrap {
  width: 100%;
  max-width: 440px;
  padding: 0 1.25rem;
}

.contact-card {
  padding: 2rem 1.75rem;
  text-align: center;
}

.contact-msg {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin: 0 0 1.5rem;
}

.contact-btns {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  align-items: center;
  margin-bottom: 1.25rem;
}

@media (min-width: 420px) {
  .contact-btns { flex-direction: row; justify-content: center; }
}

.contact-note {
  font-size: 0.75rem;
  color: #94a3b8;
  margin: 0;
}

.footer-txt {
  position: absolute;
  bottom: 1.25rem;
  font-size: 0.72rem;
  color: #94a3b8;
}
</style>
