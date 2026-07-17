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
  <!-- Hero wrapper: full-screen grid so video fills it -->
  <div class="relative grid w-full min-h-screen bg-[#111]">
    <!-- Green top bar -->
    <header
      class="absolute top-0 left-0 w-full z-5 h-[2.05rem] max-md:h-[2.55rem] max-sm:h-[2.8rem] text-[0.8rem] text-[#f3fff1] bg-brand shadow-[0_2px_10px_rgba(0,0,0,0.14)]"
    >
      <div
        class="flex items-center justify-end gap-[0.8rem] w-[min(1520px,calc(100%-2rem))] max-md:w-[min(1520px,calc(100%-1.2rem))] max-sm:w-[calc(100%-1rem)] h-full mx-auto"
      >
        <div class="opacity-95">📍 Calle Demo 1, 01000 Ciudad Ejemplo, España</div>
        <div class="opacity-95">✉ reservas@hoteldemo.example</div>
        <div class="opacity-95">☎ +34 900 000 000</div>
      </div>
    </header>

    <!-- White navbar -->
    <nav
      class="absolute left-0 w-full z-4 top-[2.05rem] max-md:top-[2.55rem] max-sm:top-[2.8rem] bg-white shadow-[0_8px_24px_rgba(4,12,5,0.14)]"
      aria-label="Principal"
    >
      <div
        class="flex items-center justify-between gap-4 w-[min(1520px,calc(100%-2rem))] max-md:w-[min(1520px,calc(100%-1.2rem))] max-sm:w-[calc(100%-1rem)] mx-auto py-[0.7rem] px-[0.2rem] max-md:flex-col max-md:items-start max-md:gap-[0.9rem]"
      >
        <!-- Brand -->
        <div class="flex items-center gap-[0.85rem]">
          <div
            class="flex flex-col items-center justify-center w-[4.2rem] min-w-[4.2rem] h-[4.2rem] gap-[0.08rem] text-white font-extrabold bg-brand"
          >
            <span class="text-[0.42rem] tracking-[0.24em]">HOTEL</span>
            <span class="text-[1.15rem] leading-none">UJ</span>
            <span class="text-[0.38rem] tracking-[0.08em]">★★★★★</span>
          </div>
          <div class="pl-[0.1rem]">
            <p class="m-0 uppercase tracking-[0.22em] text-[0.7rem] text-[#4e6a4f]">
              Hotel &amp; Catering
            </p>
            <h1 class="mt-[0.08rem] mb-0 text-[1.12rem] leading-[1.08] text-brand font-semibold">
              Hotel Demo Suites
            </h1>
            <p class="mt-[0.05rem] mb-0 text-[0.72rem] tracking-[0.34em] text-[#7e9b80]">
              Ciudad Ejemplo
            </p>
          </div>
        </div>

        <!-- Nav links -->
        <div
          class="flex flex-wrap justify-end items-center gap-x-4 gap-y-[0.65rem] max-sm:justify-start"
        >
          <a
            v-for="item in navItems"
            :key="item"
            :href="navHref(item)"
            class="inline-flex items-center min-h-8 px-[0.6rem] text-[#355436] font-questrial text-[0.9375rem] font-normal no-underline relative hover:text-brand transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-[0.6rem] after:right-[0.6rem] after:h-[2px] after:bg-brand after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >{{ item }}</a
          >
          <a
            href="#reservar"
            class="inline-flex items-center min-h-8 pl-[0.9rem] pr-[0.7rem] rounded-[0.15rem] text-brand font-questrial text-[0.9375rem] font-normal border-l border-black/8 hover:text-brand-dark hover:bg-brand-light transition-colors duration-200"
            >MI RESERVA ▾</a
          >
        </div>
      </div>
    </nav>

    <!-- Background video -->
    <video
      ref="videoRef"
      class="absolute inset-0 w-full h-full object-cover object-center"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
    />

    <!-- Overlay gradient -->
    <div
      class="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.01),rgba(255,255,255,0)_20%),linear-gradient(90deg,rgba(12,30,14,0.18),rgba(12,30,14,0.03)_48%,rgba(12,30,14,0.2))]"
    ></div>
  </div>
</template>
