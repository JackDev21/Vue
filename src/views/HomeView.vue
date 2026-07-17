<script setup lang="ts">
import { ref, computed } from 'vue'
import BookingBar, { type ReserveData } from '../components/booking/BookingBar.vue'
import SiteFooter from '../components/footer/SiteFooter.vue'
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
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Junior Deluxe',
    description:
      'Diseñada para escapadas cortas con un equilibrio perfecto entre confort y estilo.',
    price: 'desde 149€',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Family Garden',
    description:
      'Amplia, luminosa y pensada para familias que buscan comodidad sin complicaciones.',
    price: 'desde 219€',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
  },
]

const heroVideoUrl =
  'https://stream.mux.com/4RYQufGFHUSY7eheUryhm00aPOpk1iUZxF7wi00S01zQFQ.m3u8?redundant_streams=true'

const showModal = ref(false)
const bookingData = ref<ReserveData | null>(null)

function handleReserve(data: ReserveData) {
  bookingData.value = data
  showModal.value = true
}

const totalNights = computed(() => {
  if (!bookingData.value?.startDate || !bookingData.value?.endDate) return 0
  const diffTime = Math.abs(bookingData.value.endDate.getTime() - bookingData.value.startDate.getTime())
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
})

const formattedStartDate = computed(() => {
  if (!bookingData.value?.startDate) return ''
  return bookingData.value.startDate.toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
})

const formattedEndDate = computed(() => {
  if (!bookingData.value?.endDate) return ''
  return bookingData.value.endDate.toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
})
</script>

<template>
  <main class="min-h-screen text-brand-dark bg-brand-light">
    <!-- Hero section -->
    <section class="relative overflow-hidden w-full p-0 bg-[#111]">
      <div class="relative z-1 w-full">
        <HeroHeader :hero-video-url="heroVideoUrl" :nav-items="navItems" />
        <BookingBar @reserve="handleReserve" />
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
          class="group overflow-hidden border border-[rgba(49,90,50,0.12)] rounded-[1.35rem] bg-white/90 shadow-[0_18px_34px_rgba(22,48,25,0.08)] hover:shadow-xl hover:border-brand/30 transition-all duration-300"
        >
          <div
            class="min-h-47.5 bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
            :style="{
              backgroundImage: `linear-gradient(180deg, rgba(11,24,12,0.08), rgba(11,24,12,0.36)), url('${room.image}')`
            }"
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

    <SiteFooter />

    <!-- Reservation Confirmation Modal -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="showModal"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        @click="showModal = false"
      >
        <div
          class="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white p-6 shadow-2xl transition-all border border-brand/10"
          @click.stop
        >
          <!-- Header -->
          <div class="flex items-start justify-between border-b border-gray-100 pb-4 mb-4">
            <div>
              <span class="text-[0.68rem] uppercase tracking-wider text-[#4e6a4f] font-semibold">Confirmación de Reserva</span>
              <h3 class="m-0 mt-1 text-xl font-bold text-brand-dark">¡Tu estancia en Hotel Demo!</h3>
            </div>
            <button
              type="button"
              class="rounded-full w-8 h-8 flex items-center justify-center bg-gray-50 hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer border-0"
              @click="showModal = false"
              aria-label="Cerrar modal"
            >
              ✕
            </button>
          </div>

          <!-- Content Details -->
          <div class="space-y-4 text-sm text-brand-dark">
            <p class="m-0 text-gray-600">
              Hemos preparado todo para tu llegada. Por favor, confirma los detalles de tu reserva a continuación:
            </p>

            <div class="bg-brand-light/70 rounded-xl p-4 border border-brand/5 space-y-3">
              <!-- Dates -->
              <div class="flex items-start gap-3">
                <span class="text-lg">📅</span>
                <div>
                  <div class="font-semibold text-xs text-gray-500 uppercase tracking-wider">Fechas de Estancia</div>
                  <div class="mt-0.5 text-brand-dark font-medium">
                    {{ formattedStartDate }} <br />
                    <span class="text-xs text-gray-500 font-normal">hasta</span> <br />
                    {{ formattedEndDate }}
                  </div>
                  <div class="mt-1 text-xs text-brand font-bold">
                    Total: {{ totalNights }} {{ totalNights === 1 ? 'noche' : 'noches' }}
                  </div>
                </div>
              </div>

              <!-- Distribution -->
              <div class="flex items-start gap-3 pt-2 border-t border-[#edf0f5]">
                <span class="text-lg">👥</span>
                <div>
                  <div class="font-semibold text-xs text-gray-500 uppercase tracking-wider">Distribución</div>
                  <div class="mt-0.5 text-brand-dark font-medium">
                    {{ bookingData?.adultCount }} {{ bookingData?.adultCount === 1 ? 'Adulto' : 'Adultos' }}
                    <span v-if="bookingData && bookingData.childCount > 0">
                      y {{ bookingData.childCount }} {{ bookingData.childCount === 1 ? 'Niño' : 'Niños' }}
                    </span>
                    · {{ bookingData?.roomCount }} {{ bookingData?.roomCount === 1 ? 'Habitación' : 'Habitaciones' }}
                  </div>
                </div>
              </div>

              <!-- Promo Code (Optional) -->
              <div v-if="bookingData?.promoCode" class="flex items-start gap-3 pt-2 border-t border-[#edf0f5]">
                <span class="text-lg">🏷️</span>
                <div>
                  <div class="font-semibold text-xs text-gray-500 uppercase tracking-wider">Código Promocional</div>
                  <div class="mt-0.5 text-brand font-mono font-bold bg-brand/10 px-2 py-0.5 rounded text-xs inline-block">
                    {{ bookingData.promoCode }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Total Price estimation or next steps -->
            <div class="space-y-1">
              <div class="text-xs text-gray-500">¿Qué sigue ahora?</div>
              <p class="m-0 text-xs text-gray-600 leading-normal">
                Al hacer clic en "Confirmar reserva", nuestro equipo procesará tu solicitud y te enviará un correo de confirmación con el código de check-in digital y detalles adicionales en los próximos minutos.
              </p>
            </div>
          </div>

          <!-- Footer Actions -->
          <div class="mt-6 flex items-center gap-3">
            <button
              type="button"
              class="flex-1 py-3 px-4 border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold rounded-lg text-sm transition-colors cursor-pointer"
              @click="showModal = false"
            >
              Cancelar
            </button>
            <button
              type="button"
              class="flex-1 py-3 px-4 bg-brand hover:brightness-110 text-white font-bold rounded-lg text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
              @click="showModal = false"
            >
              Confirmar reserva
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </main>
</template>
