<script setup lang="ts">
import { useBooking } from '../../composables/useBooking'

const {
  acceptGuests,
  adultCount,
  bookingRef,
  calendarMonths,
  calendarOpen,
  endDate,
  childCount,
  formatGuestSummary,
  formatSelectedDay,
  getCalendarDayClass,
  guestsOpen,
  openCalendar,
  openGuests,
  roomCount,
  selectCalendarDate,
  shiftVisibleMonth,
  startDate,
  updateGuestCount,
  weekdayLabels,
} = useBooking()
</script>

<template>
  <div
    ref="bookingRef"
    id="reservar"
    class="absolute left-1/2 -translate-x-1/2 bottom-[2.9rem] max-md:bottom-[2.1rem] max-sm:bottom-[1.45rem] z-4 w-[min(1240px,calc(100%-2.2rem))] max-md:w-[min(100%-1.4rem,1240px)] max-sm:w-[calc(100%-0.95rem)] p-[0.42rem] border border-[#d7dde7] rounded-[0.18rem] bg-white/98 shadow-[0_12px_28px_rgba(0,0,0,0.14)]"
  >
    <div
      v-if="calendarOpen"
      class="absolute left-0 bottom-[calc(100%+0.9rem)] z-6 w-[min(760px,calc(100vw-2rem))] max-md:w-[min(760px,calc(100vw-1.5rem))] max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:w-[calc(100vw-0.9rem)] grid grid-cols-2 max-sm:grid-cols-1 gap-4 p-4 border border-[#e6e8ef] rounded-[0.18rem] bg-white shadow-[0_22px_42px_rgba(0,0,0,0.16)]"
      @click.stop
    >
      <div
        v-for="(month, monthIndex) in calendarMonths"
        :key="month.title"
        class="px-[0.35rem] pt-[0.15rem] pb-[0.4rem]"
      >
        <div class="flex items-center justify-between mb-[0.8rem]">
          <h4 class="m-0 text-[#1f2a39] text-base font-bold capitalize">{{ month.title }}</h4>
          <button
            v-if="monthIndex === 1"
            type="button"
            class="border-0 bg-transparent text-[#8d98ac] text-[1.45rem] leading-none cursor-pointer"
            @click="shiftVisibleMonth(1)"
          >
            ›
          </button>
        </div>
        <div
          class="grid grid-cols-7 mb-[0.35rem] text-[#7d8798] text-[0.85rem] lowercase text-center"
        >
          <span v-for="day in weekdayLabels" :key="day">{{ day }}</span>
        </div>
        <div class="grid grid-cols-7 gap-[0.08rem]">
          <button
            v-for="cell in month.cells"
            :key="`${cell.date.getFullYear()}-${cell.date.getMonth()}-${cell.date.getDate()}`"
            type="button"
            :class="[
              'min-h-[2.45rem] border-0 rounded-[0.18rem] bg-transparent font-[inherit] cursor-pointer',
              cell.disabled ? 'text-[#d2d8e3] cursor-not-allowed' : 'text-[#243143]',
              !cell.inCurrentMonth && 'text-[#d2d8e3]',
              getCalendarDayClass(cell.date, cell.inCurrentMonth).includes(
                'calendar-day--in-range',
              ) && 'bg-[#dcefd7] text-[#274026]',
              (getCalendarDayClass(cell.date, cell.inCurrentMonth).includes(
                'calendar-day--selected-start',
              ) ||
                getCalendarDayClass(cell.date, cell.inCurrentMonth).includes(
                  'calendar-day--selected-end',
                )) &&
                'bg-[#3b7f2a]! text-white!',
            ]"
            :disabled="cell.disabled"
            @click="selectCalendarDate(cell.date)"
          >
            {{ cell.date.getDate() }}
          </button>
        </div>
      </div>
    </div>

    <div
      class="grid grid-cols-[minmax(0,2.05fr)_minmax(0,2.45fr)_minmax(0,1.95fr)_170px] max-md:grid-cols-[1.05fr_1.05fr] max-sm:grid-cols-1 items-stretch gap-[0.85rem] max-md:gap-3 max-sm:gap-[0.65rem]"
    >
      <div
        class="grid grid-cols-2 overflow-hidden border border-[#c7cfdb] rounded-[0.18rem] bg-white max-md:col-span-2 max-sm:col-span-1"
      >
        <button
          type="button"
          class="grid content-center gap-[0.16rem] min-h-18 px-[0.92rem] py-[0.72rem] border-0 border-r border-[#c7cfdb] text-[#617463] bg-white w-full cursor-pointer text-left"
          @click="openCalendar('start')"
        >
          <span class="text-[0.68rem] uppercase tracking-[0.11em] text-[#7b8b7d] whitespace-nowrap"
            >Entrada</span
          >
          <strong class="text-[#183b11] text-base font-normal">{{
            formatSelectedDay(startDate)
          }}</strong>
        </button>
        <button
          type="button"
          class="grid content-center gap-[0.16rem] min-h-18 px-[0.92rem] py-[0.72rem] border-0 text-[#617463] bg-white w-full cursor-pointer text-left"
          @click="openCalendar('end')"
        >
          <span class="text-[0.68rem] uppercase tracking-[0.11em] text-[#7b8b7d] whitespace-nowrap"
            >Salida</span
          >
          <strong class="text-[#183b11] text-base font-normal">{{
            formatSelectedDay(endDate)
          }}</strong>
        </button>
      </div>

      <div
        class="relative grid grid-rows-[auto_1fr] content-center gap-[0.16rem] min-h-18 max-sm:min-h-17 px-[0.92rem] py-[0.72rem] border border-[#c7cfdb] text-[#617463] bg-white max-md:col-start-1 max-md:col-end-2 max-sm:col-span-1"
      >
        <span class="text-[0.68rem] uppercase tracking-[0.11em] text-[#7b8b7d] whitespace-nowrap"
          >Huéspedes</span
        >
        <button
          type="button"
          class="flex items-center gap-[0.65rem] min-w-0 w-full border-0 p-0 bg-transparent text-left cursor-pointer text-[#183b11] text-base font-normal leading-[1.15]"
          @click="openGuests"
        >
          <span class="flex-none text-base">👥</span>
          <span class="flex-1 min-w-0 mr-3 overflow-hidden text-ellipsis whitespace-nowrap">{{
            formatGuestSummary()
          }}</span>
          <span class="text-[#94a0b2] text-[1.2rem] leading-none">⌄</span>
        </button>

        <div
          v-if="guestsOpen"
          class="absolute left-1/2 -translate-x-1/2 bottom-[calc(100%+0.9rem)] z-7 w-[min(360px,calc(100vw-1rem))] p-4 border border-[#e1e4ee] rounded-[0.2rem] bg-white shadow-[0_22px_42px_rgba(0,0,0,0.16)]"
          @click.stop
        >
          <div class="flex items-center justify-between gap-4 pt-[0.35rem] pb-[0.9rem]">
            <strong class="text-[#1e2937] text-base font-bold">Habitaciones</strong>
            <div
              class="inline-flex items-center border border-[#cfd5e3] rounded-[0.18rem] overflow-hidden"
            >
              <button
                type="button"
                class="w-[2.2rem] h-[2.2rem] border-0 text-[#9aa4b7] bg-white text-[1.15rem] cursor-pointer"
                @click="updateGuestCount('rooms', -1)"
              >
                −
              </button>
              <span
                class="inline-grid place-items-center min-w-[2.2rem] h-[2.2rem] text-[#1f2a39] text-base font-medium bg-white"
                >{{ roomCount }}</span
              >
              <button
                type="button"
                class="w-[2.2rem] h-[2.2rem] border-0 text-[#9aa4b7] bg-white text-[1.15rem] cursor-pointer"
                @click="updateGuestCount('rooms', 1)"
              >
                +
              </button>
            </div>
          </div>
          <div
            class="flex items-center justify-between gap-4 pt-[0.35rem] pb-[0.9rem] border-t border-[#edf0f5]"
          >
            <div class="grid gap-[0.15rem]">
              <strong class="text-[#1e2937] text-base font-bold">Adultos</strong>
              <span class="text-[#7d8798] text-[0.85rem]">Desde 14 años</span>
            </div>
            <div
              class="inline-flex items-center border border-[#cfd5e3] rounded-[0.18rem] overflow-hidden"
            >
              <button
                type="button"
                class="w-[2.2rem] h-[2.2rem] border-0 text-[#9aa4b7] bg-white text-[1.15rem] cursor-pointer"
                @click="updateGuestCount('adults', -1)"
              >
                −
              </button>
              <span
                class="inline-grid place-items-center min-w-[2.2rem] h-[2.2rem] text-[#1f2a39] text-base font-medium bg-white"
                >{{ adultCount }}</span
              >
              <button
                type="button"
                class="w-[2.2rem] h-[2.2rem] border-0 text-[#9aa4b7] bg-white text-[1.15rem] cursor-pointer"
                @click="updateGuestCount('adults', 1)"
              >
                +
              </button>
            </div>
          </div>
          <div
            class="flex items-center justify-between gap-4 pt-[0.35rem] pb-[0.9rem] border-t border-[#edf0f5]"
          >
            <div class="grid gap-[0.15rem]">
              <strong class="text-[#1e2937] text-base font-bold">Niños</strong>
              <span class="text-[#7d8798] text-[0.85rem]">Hasta 13 años</span>
            </div>
            <div
              class="inline-flex items-center border border-[#cfd5e3] rounded-[0.18rem] overflow-hidden"
            >
              <button
                type="button"
                class="w-[2.2rem] h-[2.2rem] border-0 text-[#9aa4b7] bg-white text-[1.15rem] cursor-pointer"
                @click="updateGuestCount('children', -1)"
              >
                −
              </button>
              <span
                class="inline-grid place-items-center min-w-[2.2rem] h-[2.2rem] text-[#1f2a39] text-base font-medium bg-white"
                >{{ childCount }}</span
              >
              <button
                type="button"
                class="w-[2.2rem] h-[2.2rem] border-0 text-[#9aa4b7] bg-white text-[1.15rem] cursor-pointer"
                @click="updateGuestCount('children', 1)"
              >
                +
              </button>
            </div>
          </div>
          <button
            type="button"
            class="w-full min-h-11 mt-3 border border-brand rounded-[0.18rem] text-brand bg-white text-base cursor-pointer"
            @click="acceptGuests"
          >
            Aceptar
          </button>
        </div>
      </div>

      <label
        class="flex flex-col justify-center items-center min-h-18 max-md:min-h-19 max-sm:min-h-17 px-[1.2rem] py-[0.82rem] border border-[#c7cfdb] text-[#617463] bg-white text-center max-md:col-start-2 max-md:col-end-3 max-sm:col-span-1"
      >
        <input
          type="text"
          placeholder="Código promocional"
          aria-label="Código promocional"
          class="block w-full border-0 outline-none bg-transparent text-[#8b95a9] text-[1.08rem] font-normal text-center placeholder:text-[#8b95a9]"
        />
      </label>

      <button
        type="button"
        class="min-w-42 max-md:col-span-2 max-md:min-h-[3.4rem] max-sm:col-span-1 max-sm:w-full border-0 rounded-[0.18rem] px-5 text-white font-extrabold text-[0.94rem] tracking-wider bg-[linear-gradient(135deg,#34852d,#3f8c27)] cursor-pointer"
      >
        RESERVAR
      </button>
    </div>
  </div>
</template>
