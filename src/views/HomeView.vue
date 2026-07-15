<script setup lang="ts">
import BookingBar from '../components/booking/BookingBar.vue'
import HeroHeader from '../components/hero/HeroHeader.vue'

const navItems = [
  'INICIO',
  'HOTEL',
  'HABITACIONES Y APARTAMENTOS',
  'SERVICIOS',
  'EVENTOS',
  'GALERÍA',
  'OFERTAS',
  'CONTACTO',
]

const services = [
  'Spa y wellness',
  'Restaurante gourmet',
  'Piscina panorámica',
  'Traslado al aeropuerto',
]

const rooms = [
  {
    name: 'Suite Skyline',
    description: 'Vistas abiertas, cama king y espacio para relajarte o trabajar con calma.',
    price: 'desde 189€',
  },
  {
    name: 'Junior Deluxe',
    description:
      'Diseñada para escapadas cortas con un equilibrio perfecto entre confort y estilo.',
    price: 'desde 149€',
  },
  {
    name: 'Family Garden',
    description:
      'Amplia, luminosa y pensada para familias que buscan comodidad sin complicaciones.',
    price: 'desde 219€',
  },
]

const heroVideoUrl =
  'https://stream.mux.com/4RYQufGFHUSY7eheUryhm00aPOpk1iUZxF7wi00S01zQFQ.m3u8?redundant_streams=true'
</script>

<template>
  <main class="min-h-screen text-brand-dark bg-brand-light">
    <!-- Hero section -->
    <section class="relative overflow-hidden w-full p-0 bg-[#111]">
      <div class="relative z-1 w-full">
        <HeroHeader :hero-video-url="heroVideoUrl" :nav-items="navItems" />
        <BookingBar />
      </div>
    </section>

    <!-- Servicios -->
    <section
      id="servicios"
      class="px-[clamp(1rem,3vw,3rem)] py-[clamp(3rem,6vw,5rem)] max-w-295 mx-auto max-sm:px-3"
    >
      <div class="mb-6">
        <p class="m-0 uppercase tracking-[0.22em] text-[0.7rem] text-[#4e6a4f]">
          Servicios destacados
        </p>
        <h3 class="mt-[0.35rem] mb-0 text-brand-dark text-[clamp(1.6rem,2.8vw,2.6rem)]">
          Todo lo que esperas de una estancia cómoda y memorable.
        </h3>
      </div>
      <div class="grid grid-cols-3 max-md:grid-cols-1 gap-5">
        <article
          v-for="service in services"
          :key="service"
          class="overflow-hidden border border-[rgba(49,90,50,0.12)] rounded-[1.35rem] bg-white/90 shadow-[0_18px_34px_rgba(22,48,25,0.08)] p-[1.35rem]"
        >
          <span
            class="inline-grid place-items-center w-10 h-10 rounded-xl text-white bg-[linear-gradient(135deg,#2f7d32,#61b563)]"
            >✦</span
          >
          <h4 class="mt-[0.35rem] mb-0 text-brand-dark">{{ service }}</h4>
          <p class="text-[#59705b]">
            Atención cuidada, espacios agradables y detalles pensados para descansar mejor.
          </p>
        </article>
      </div>
    </section>

    <!-- Habitaciones -->
    <section
      id="habitaciones"
      class="px-[clamp(1rem,3vw,3rem)] py-[clamp(3rem,6vw,5rem)] max-w-295 mx-auto max-sm:px-3"
    >
      <div class="flex flex-wrap justify-between items-end gap-x-8 gap-y-4 mb-6">
        <div>
          <p class="m-0 uppercase tracking-[0.22em] text-[0.7rem] text-[#4e6a4f]">Habitaciones</p>
          <h3 class="mt-[0.35rem] mb-0 text-brand-dark text-[clamp(1.6rem,2.8vw,2.6rem)]">
            Elige la opción perfecta para tu viaje.
          </h3>
        </div>
        <p class="max-w-[36ch] m-0 text-[#58715b]">
          Diseño inspirado en hoteles modernos con mucha presencia visual.
        </p>
      </div>
      <div class="grid grid-cols-3 max-md:grid-cols-1 gap-5">
        <article
          v-for="room in rooms"
          :key="room.name"
          class="overflow-hidden border border-[rgba(49,90,50,0.12)] rounded-[1.35rem] bg-white/90 shadow-[0_18px_34px_rgba(22,48,25,0.08)]"
        >
          <div
            class="min-h-47.5 bg-[linear-gradient(180deg,rgba(11,24,12,0.08),rgba(11,24,12,0.36)),url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80')] bg-center bg-cover"
          ></div>
          <div class="p-[1.2rem]">
            <p
              class="m-0 mb-[0.3rem] text-brand font-extrabold uppercase tracking-[0.08em] text-[0.82rem]"
            >
              {{ room.price }}
            </p>
            <h4 class="mt-[0.35rem] mb-0 text-brand-dark">{{ room.name }}</h4>
            <p class="text-[#59705b]">{{ room.description }}</p>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>
