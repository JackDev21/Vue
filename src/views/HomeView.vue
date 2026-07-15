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
  <main class="hotel-page">
    <section class="hero">
      <div class="hero__stage">
        <HeroHeader :hero-video-url="heroVideoUrl" :nav-items="navItems" />
        <BookingBar />
      </div>
    </section>

    <section class="section" id="servicios">
      <div class="section__header">
        <p class="eyebrow">Servicios destacados</p>
        <h3>Todo lo que esperas de una estancia cómoda y memorable.</h3>
      </div>

      <div class="services">
        <article v-for="service in services" :key="service" class="service-card">
          <span class="service-card__icon">✦</span>
          <h4>{{ service }}</h4>
          <p>Atención cuidada, espacios agradables y detalles pensados para descansar mejor.</p>
        </article>
      </div>
    </section>

    <section class="section" id="habitaciones">
      <div class="section__header section__header--row">
        <div>
          <p class="eyebrow">Habitaciones</p>
          <h3>Elige la opción perfecta para tu viaje.</h3>
        </div>
        <p class="section__note">
          Diseño inspirado en hoteles modernos con mucha presencia visual.
        </p>
      </div>

      <div class="rooms">
        <article v-for="room in rooms" :key="room.name" class="room-card">
          <div class="room-card__image"></div>
          <div class="room-card__body">
            <p class="room-card__price">{{ room.price }}</p>
            <h4>{{ room.name }}</h4>
            <p>{{ room.description }}</p>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.hotel-page {
  min-height: 100vh;
  color: #163019;
  background: #f6faf3;
}

.topbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: linear-gradient(135deg, #34852d, #3f8c27);
  cursor: pointer;
}

.section {
  padding: clamp(3rem, 6vw, 5rem) clamp(1rem, 3vw, 3rem);
  max-width: 1180px;
  margin: 0 auto;
}

.section__header {
  margin-bottom: 1.5rem;
}

.section__header--row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem 2rem;
  align-items: flex-end;
}

.section__header h3,
.service-card h4,
.room-card h4 {
  margin: 0.35rem 0 0;
  color: #163019;
}

.section__header h3 {
  font-size: clamp(1.6rem, 2.8vw, 2.6rem);
}

.section__note {
  max-width: 36ch;
  margin: 0;
  color: #58715b;
}

.services,
.rooms {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
}

.service-card,
.room-card {
  overflow: hidden;
  border: 1px solid rgba(49, 90, 50, 0.12);
  border-radius: 1.35rem;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 18px 34px rgba(22, 48, 25, 0.08);
}

.service-card {
  padding: 1.35rem;
}

.service-card__icon {
  display: inline-grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  color: #fff;
  background: linear-gradient(135deg, #2f7d32, #61b563);
}

.service-card p,
.room-card p {
  color: #59705b;
}

.room-card__image {
  min-height: 190px;
  background:
    linear-gradient(180deg, rgba(11, 24, 12, 0.08), rgba(11, 24, 12, 0.36)),
    url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80')
      center/cover;
}

.room-card__body {
  padding: 1.2rem;
}

.room-card__price {
  margin: 0 0 0.3rem;
  color: #2f7d32;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.82rem;
}

@media (max-width: 980px) {
  .services,
  .rooms {
    grid-template-columns: 1fr;
  }

  .stats {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .hero {
    padding-inline: 0;
  }

  .booking-grid {
    grid-template-columns: 1fr;
    gap: 0.65rem;
  }

  .section {
    padding-inline: 0.75rem;
  }
}
</style>
