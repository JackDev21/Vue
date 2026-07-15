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
  <div ref="bookingRef" class="hero__booking booking-card" id="reservar">
    <div v-if="calendarOpen" class="booking-calendar" @click.stop>
      <div v-for="(month, monthIndex) in calendarMonths" :key="month.title" class="calendar-month">
        <div class="calendar-month__header">
          <h4 class="calendar-month__title">{{ month.title }}</h4>
          <button
            v-if="monthIndex === 1"
            class="calendar-month__nav"
            type="button"
            @click="shiftVisibleMonth(1)"
          >
            ›
          </button>
        </div>

        <div class="calendar-weekdays">
          <span v-for="day in weekdayLabels" :key="day">{{ day }}</span>
        </div>

        <div class="calendar-days">
          <button
            v-for="cell in month.cells"
            :key="`${cell.date.getFullYear()}-${cell.date.getMonth()}-${cell.date.getDate()}`"
            type="button"
            :class="getCalendarDayClass(cell.date, cell.inCurrentMonth)"
            :disabled="cell.disabled"
            @click="selectCalendarDate(cell.date)"
          >
            {{ cell.date.getDate() }}
          </button>
        </div>
      </div>
    </div>

    <div class="booking-grid">
      <div class="booking-grid__dates">
        <button
          class="booking-field booking-field--date"
          type="button"
          @click="openCalendar('start')"
        >
          <span>Entrada</span>
          <strong>{{ formatSelectedDay(startDate) }}</strong>
        </button>
        <button
          class="booking-field booking-field--date booking-field--date-end"
          type="button"
          @click="openCalendar('end')"
        >
          <span>Salida</span>
          <strong>{{ formatSelectedDay(endDate) }}</strong>
        </button>
      </div>

      <div class="booking-field booking-field--people">
        <span>Huéspedes</span>
        <button
          class="booking-field__value booking-field__value--button"
          type="button"
          @click="openGuests"
        >
          <span class="booking-field__icon">👥</span>
          <span class="booking-field__summary">{{ formatGuestSummary() }}</span>
          <span class="booking-field__caret">⌄</span>
        </button>

        <div v-if="guestsOpen" class="guest-popover" @click.stop>
          <div class="guest-row">
            <div class="guest-row__info">
              <strong>Habitaciones</strong>
            </div>
            <div class="guest-stepper">
              <button type="button" @click="updateGuestCount('rooms', -1)">−</button>
              <span>{{ roomCount }}</span>
              <button type="button" @click="updateGuestCount('rooms', 1)">+</button>
            </div>
          </div>

          <div class="guest-row">
            <div class="guest-row__info">
              <strong>Adultos</strong>
              <span>Desde 14 años</span>
            </div>
            <div class="guest-stepper">
              <button type="button" @click="updateGuestCount('adults', -1)">−</button>
              <span>{{ adultCount }}</span>
              <button type="button" @click="updateGuestCount('adults', 1)">+</button>
            </div>
          </div>

          <div class="guest-row">
            <div class="guest-row__info">
              <strong>Niños</strong>
              <span>Hasta 13 años</span>
            </div>
            <div class="guest-stepper">
              <button type="button" @click="updateGuestCount('children', -1)">−</button>
              <span>{{ childCount }}</span>
              <button type="button" @click="updateGuestCount('children', 1)">+</button>
            </div>
          </div>

          <button class="guest-popover__accept" type="button" @click="acceptGuests">Aceptar</button>
        </div>
      </div>

      <label class="booking-field booking-field--promo">
        <input type="text" placeholder="Código promocional" aria-label="Código promocional" />
      </label>

      <button class="booking-card__button" type="button">RESERVAR</button>
    </div>
  </div>
</template>

<style scoped>
.hero__booking {
  position: absolute;
  left: 50%;
  bottom: 2.9rem;
  z-index: 4;
  width: min(1240px, calc(100% - 2.2rem));
  transform: translateX(-50%);
}

.booking-card {
  padding: 0.42rem;
  border: 1px solid #d7dde7;
  border-radius: 0.18rem;
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.14);
}

.booking-calendar {
  position: absolute;
  left: 0;
  bottom: calc(100% + 0.9rem);
  z-index: 6;
  width: min(760px, calc(100vw - 2rem));
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #e6e8ef;
  border-radius: 0.18rem;
  background: #fff;
  box-shadow: 0 22px 42px rgba(0, 0, 0, 0.16);
}

.calendar-month {
  padding: 0.15rem 0.35rem 0.4rem;
}

.calendar-month__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.8rem;
}

.calendar-month__title {
  margin: 0;
  color: #1f2a39;
  font-size: 1rem;
  font-weight: 700;
  text-transform: capitalize;
}

.calendar-month__nav {
  border: 0;
  background: transparent;
  color: #8d98ac;
  font-size: 1.45rem;
  line-height: 1;
  cursor: pointer;
}

.calendar-weekdays {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  margin-bottom: 0.35rem;
  color: #7d8798;
  font-size: 0.85rem;
  text-transform: lowercase;
  text-align: center;
}

.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 0.08rem;
}

.calendar-day {
  min-height: 2.45rem;
  border: 0;
  border-radius: 0.18rem;
  background: transparent;
  color: #243143;
  font: inherit;
  cursor: pointer;
}

.calendar-day:hover:not(:disabled) {
  background: #eef4ea;
}

.calendar-day--outside,
.calendar-day--disabled {
  color: #d2d8e3;
}

.calendar-day--disabled {
  cursor: not-allowed;
}

.calendar-day--in-range {
  background: #dcefd7;
  color: #274026;
}

.calendar-day--selected-start,
.calendar-day--selected-end {
  background: #3b7f2a;
  color: #fff;
}

.calendar-day--selected-start.calendar-day--selected-end {
  border-radius: 0.18rem;
}

.booking-grid {
  display: grid;
  grid-template-columns: minmax(0, 2.05fr) minmax(0, 2.45fr) minmax(0, 1.95fr) minmax(0, 170px);
  align-items: stretch;
  gap: 0.85rem;
}

.booking-grid__dates {
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  border: 1px solid #c7cfdb;
  border-radius: 0.18rem;
  background: #fff;
}

.booking-field {
  display: grid;
  align-content: center;
  gap: 0.16rem;
  min-height: 72px;
  padding: 0.72rem 0.92rem;
  border: 1px solid #c7cfdb;
  color: #617463;
  background: #fff;
}

.booking-field--date {
  width: 100%;
  cursor: pointer;
  text-align: left;
}

.booking-field--date {
  border: 0;
  border-right: 1px solid #c7cfdb;
  border-radius: 0;
}

.booking-field--date-end {
  border-right: 0;
}

.booking-field--people,
.booking-field--promo {
  grid-template-rows: auto 1fr;
}

.booking-field--people {
  position: relative;
}

.booking-field__value--button {
  width: 100%;
  border: 0;
  padding: 0;
  background: transparent;
  text-align: left;
  cursor: pointer;
}

.booking-field__summary {
  flex: 1 1 auto;
  min-width: 0;
  margin-right: 0.75rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.booking-field__caret {
  color: #94a0b2;
  font-size: 1.2rem;
  line-height: 1;
}

.booking-field--promo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.82rem 1.2rem;
  text-align: center;
}

.booking-field span {
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.11em;
  color: #7b8b7d;
  white-space: nowrap;
}

.booking-field input,
.booking-field select {
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  background: transparent;
  color: #29402a;
  font: inherit;
  appearance: none;
}

.booking-field input[type='date'] {
  min-height: 1.4rem;
  color: #29402a;
}

.booking-field input[type='date']::-webkit-calendar-picker-indicator {
  opacity: 0;
  cursor: pointer;
}

.booking-field__value {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  min-width: 0;
  color: #183b11;
  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.15;
}

.booking-field__icon {
  color: #183b11;
  font-size: 1rem;
  flex: 0 0 auto;
}

.guest-popover {
  position: absolute;
  left: 50%;
  bottom: calc(100% + 0.9rem);
  z-index: 7;
  width: min(360px, calc(100vw - 1rem));
  padding: 1rem;
  border: 1px solid #e1e4ee;
  border-radius: 0.2rem;
  background: #fff;
  box-shadow: 0 22px 42px rgba(0, 0, 0, 0.16);
  transform: translateX(-50%);
}

.guest-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.35rem 0 0.9rem;
}

.guest-row + .guest-row {
  border-top: 1px solid #edf0f5;
}

.guest-row__info {
  display: grid;
  gap: 0.15rem;
}

.guest-row__info strong {
  color: #1e2937;
  font-size: 1rem;
  font-weight: 700;
}

.guest-row__info span {
  color: #7d8798;
  font-size: 0.85rem;
  text-transform: none;
  letter-spacing: 0;
  white-space: normal;
}

.guest-stepper {
  display: inline-flex;
  align-items: center;
  border: 1px solid #cfd5e3;
  border-radius: 0.18rem;
  overflow: hidden;
}

.guest-stepper button {
  width: 2.2rem;
  height: 2.2rem;
  border: 0;
  color: #9aa4b7;
  background: #fff;
  font-size: 1.15rem;
  cursor: pointer;
}

.guest-stepper span {
  display: inline-grid;
  place-items: center;
  min-width: 2.2rem;
  height: 2.2rem;
  color: #1f2a39;
  font-size: 1rem;
  font-weight: 500;
  background: #fff;
}

.guest-popover__accept {
  width: 100%;
  min-height: 2.75rem;
  margin-top: 0.75rem;
  border: 1px solid #2f7d32;
  border-radius: 0.18rem;
  color: #2f7d32;
  background: #fff;
  font-size: 1rem;
  cursor: pointer;
}

.booking-field--promo input::placeholder {
  color: #8b95a9;
  opacity: 1;
}

.booking-field--promo input {
  display: block;
  width: 100%;
  color: #8b95a9;
  font-size: 1.08rem;
  font-weight: 400;
  text-align: center;
}

.booking-card__button {
  min-width: 168px;
  border: 0;
  border-radius: 0.18rem;
  padding: 0 1.25rem;
  color: #fff;
  font-weight: 800;
  font-size: 0.94rem;
  letter-spacing: 0.05em;
  background: linear-gradient(135deg, #34852d, #3f8c27);
  cursor: pointer;
}

@media (max-width: 980px) {
  .hero__booking {
    width: min(100% - 1.4rem, 1240px);
    bottom: 2.1rem;
  }

  .booking-grid {
    grid-template-columns: 1.05fr 1.05fr;
    gap: 0.75rem;
  }

  .booking-grid__dates {
    grid-column: 1 / -1;
  }

  .booking-field--people {
    grid-column: 1 / 2;
  }

  .booking-field--promo {
    grid-column: 2 / 3;
    min-height: 76px;
  }

  .booking-field--people,
  .booking-field--promo {
    min-height: 72px;
  }

  .booking-card__button {
    grid-column: 1 / -1;
    min-height: 3.4rem;
    width: 100%;
  }

  .guest-popover {
    width: min(360px, calc(100vw - 1.5rem));
  }

  .booking-calendar {
    width: min(760px, calc(100vw - 1.5rem));
  }
}

@media (max-width: 640px) {
  .hero__booking {
    width: calc(100% - 0.95rem);
    bottom: 1.45rem;
  }

  .booking-grid {
    grid-template-columns: 1fr;
    gap: 0.65rem;
  }

  .booking-calendar {
    left: 50%;
    width: calc(100vw - 0.9rem);
    grid-template-columns: 1fr;
    transform: translateX(-50%);
    gap: 0.75rem;
  }

  .booking-grid__dates,
  .booking-field--people,
  .booking-field--promo,
  .booking-card__button {
    grid-column: 1 / -1;
  }

  .booking-grid__dates {
    grid-template-columns: 1fr 1fr;
  }

  .booking-field--people,
  .booking-field--promo {
    min-height: 68px;
  }

  .booking-card__button {
    width: 100%;
    min-height: 3.4rem;
  }

  .guest-popover {
    left: 50%;
    width: calc(100vw - 0.9rem);
    transform: translateX(-50%);
  }
}
</style>
