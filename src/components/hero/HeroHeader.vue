<script setup lang="ts">
import { ref } from 'vue'
import { useHeroVideo } from '../../composables/useHeroVideo'

const props = defineProps<{
  heroVideoUrl: string
  navItems: string[]
}>()

const videoRef = ref<HTMLVideoElement | null>(null)
useHeroVideo(videoRef, props.heroVideoUrl)

const navAnchors: Record<string, string> = {
  SERVICIOS: '#servicios',
  'HABITACIONES Y APARTAMENTOS': '#habitaciones',
}

function navHref(item: string): string {
  return navAnchors[item] ?? '#'
}
</script>

<template>
  <div class="hero-header">
    <header class="topbar topbar--overlay">
      <div class="topbar__inner">
        <div class="topbar__item">📍 Calle Principal 12, Vitoria-Gasteiz, Álava</div>
        <div class="topbar__item">✉ reservas@hotelatlanta.com</div>
        <div class="topbar__item">☎ +34 945 12 34 56</div>
      </div>
    </header>

    <nav class="navbar navbar--overlay" aria-label="Principal">
      <div class="navbar__inner">
        <div class="brand">
          <div class="brand__mark">
            <span class="brand__mark-top">HOTEL</span>
            <span class="brand__mark-main">UJ</span>
            <span class="brand__mark-stars">★★★★★</span>
          </div>
          <div class="brand__copy">
            <p class="brand__eyebrow">Hotel &amp; Catering</p>
            <h1 class="brand__name">Jardines de Uleta Suites</h1>
            <p class="brand__location">Vitoria-Gasteiz</p>
          </div>
        </div>

        <div class="navbar__links">
          <a v-for="item in navItems" :key="item" :href="navHref(item)">{{ item }}</a>
          <a href="#reservar" class="navbar__cta">MI RESERVA ▾</a>
        </div>
      </div>
    </nav>

    <video
      ref="videoRef"
      class="hero-header__video"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
    />
    <div class="hero-header__overlay"></div>
  </div>
</template>

<style scoped>
.hero-header {
  position: relative;
  display: grid;
  width: 100%;
  min-height: 100vh;
  background: #111;
}

.hero-header__video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}

.hero-header__overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0) 20%),
    linear-gradient(
      90deg,
      rgba(12, 30, 14, 0.18),
      rgba(12, 30, 14, 0.03) 48%,
      rgba(12, 30, 14, 0.2)
    );
}

.topbar,
.navbar {
  position: absolute;
  left: 0;
  z-index: 3;
  width: 100%;
}

.topbar {
  top: 0;
  z-index: 5;
  height: 2.05rem;
  font-size: 0.8rem;
  color: #f3fff1;
  background: #2f7d32;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.14);
}

.topbar__inner,
.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: min(1520px, calc(100% - 2rem));
  margin: 0 auto;
}

.topbar__inner {
  height: 100%;
  justify-content: flex-end;
  gap: 0.8rem;
}

.topbar__item {
  opacity: 0.95;
}

.navbar {
  top: 2.05rem;
  z-index: 4;
  background: #ffffff;
  box-shadow: 0 8px 24px rgba(4, 12, 5, 0.14);
}

.navbar__inner {
  padding: 0.7rem 0.2rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.brand__mark {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 4.2rem;
  min-width: 4.2rem;
  height: 4.2rem;
  gap: 0.08rem;
  color: #fff;
  font-weight: 800;
  background: #2f7d32;
}

.brand__mark-top {
  font-size: 0.42rem;
  letter-spacing: 0.24em;
}

.brand__mark-main {
  font-size: 1.15rem;
  line-height: 1;
}

.brand__mark-stars {
  font-size: 0.38rem;
  letter-spacing: 0.08em;
}

.brand__copy {
  padding-left: 0.1rem;
}

.brand__eyebrow {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 0.7rem;
  color: #4e6a4f;
}

.brand__name {
  margin: 0.08rem 0 0;
  font-size: 1.12rem;
  line-height: 1.08;
  color: #2f7d32;
  font-weight: 600;
}

.brand__location {
  margin: 0.05rem 0 0;
  font-size: 0.72rem;
  letter-spacing: 0.34em;
  color: #7e9b80;
}

.navbar__links {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.65rem 1rem;
  align-items: center;
}

.navbar__links a {
  display: inline-flex;
  align-items: center;
  min-height: 2rem;
  padding: 0 0.6rem;
  color: #355436;
  font-family: 'Questrial', sans-serif;
  font-size: 0.9375rem;
  font-weight: 400;
  letter-spacing: 0;
  text-decoration: none;
}

.navbar__cta {
  display: inline-flex;
  align-items: center;
  min-height: 2rem;
  padding: 0 0.7rem 0 0.9rem;
  border-radius: 0.15rem;
  color: #2f7d32 !important;
  font-family: 'Questrial', sans-serif;
  font-size: 0.9375rem;
  font-weight: 400 !important;
  letter-spacing: 0;
  border-left: 1px solid rgba(0, 0, 0, 0.08);
}

@media (max-width: 980px) {
  .topbar {
    height: 2.55rem;
  }

  .navbar {
    top: 2.55rem;
  }

  .topbar__inner,
  .navbar__inner {
    width: min(1520px, calc(100% - 1.2rem));
  }

  .navbar__inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.9rem;
  }
}

@media (max-width: 640px) {
  .topbar,
  .navbar {
    left: 0;
  }

  .navbar {
    top: 2.8rem;
  }

  .topbar__inner,
  .navbar__inner {
    width: calc(100% - 1rem);
  }

  .topbar__inner {
    justify-content: space-between;
    gap: 0.35rem 0.75rem;
    font-size: 0.75rem;
  }

  .navbar__links {
    justify-content: flex-start;
  }
}
</style>
