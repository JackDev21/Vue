import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

export function useBooking() {
  const bookingRef = ref<HTMLElement | null>(null)
  const calendarOpen = ref(false)
  const calendarAnchor = ref<'start' | 'end'>('start')
  const guestsOpen = ref(false)
  const referenceDate = new Date(2026, 6, 10)
  const startDate = ref<Date | null>(new Date(2026, 6, 10))
  const endDate = ref<Date | null>(new Date(2026, 6, 11))
  const visibleMonth = ref(startOfMonth(referenceDate))
  const roomCount = ref(1)
  const adultCount = ref(2)
  const childCount = ref(0)

  const weekdayLabels = ['lun', 'mar', 'mié', 'jue', 'vie', 'sáb', 'dom']

  const calendarMonths = computed(() =>
    [0, 1].map((monthOffset) => {
      const monthStart = addMonths(visibleMonth.value, monthOffset)

      return {
        title: monthStart.toLocaleDateString('es-ES', {
          month: 'long',
          year: 'numeric',
        }),
        cells: buildMonthCells(monthStart),
      }
    }),
  )

  function startOfMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), 1)
  }

  function startOfDay(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate())
  }

  function addDays(date: Date, days: number) {
    const nextDate = new Date(date)
    nextDate.setDate(nextDate.getDate() + days)
    return nextDate
  }

  function addMonths(date: Date, months: number) {
    const nextDate = new Date(date)
    nextDate.setMonth(nextDate.getMonth() + months)
    return startOfMonth(nextDate)
  }

  function isSameDay(firstDate: Date | null, secondDate: Date | null) {
    if (!firstDate || !secondDate) {
      return false
    }

    return (
      firstDate.getFullYear() === secondDate.getFullYear() &&
      firstDate.getMonth() === secondDate.getMonth() &&
      firstDate.getDate() === secondDate.getDate()
    )
  }

  function isBeforeDay(firstDate: Date, secondDate: Date) {
    return startOfDay(firstDate).getTime() < startOfDay(secondDate).getTime()
  }

  function formatBookingDate(date: Date | null) {
    if (!date) {
      return ''
    }

    return date
      .toLocaleDateString('es-ES', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
      })
      .replace('.', '')
  }

  function formatSelectedDay(date: Date | null) {
    return date ? formatBookingDate(date) : 'Seleccionar'
  }

  function buildMonthCells(monthStart: Date) {
    const monthGridStart = addDays(startOfMonth(monthStart), -((monthStart.getDay() + 6) % 7))

    return Array.from({ length: 42 }, (_, index) => {
      const date = addDays(monthGridStart, index)

      return {
        date,
        inCurrentMonth: date.getMonth() === monthStart.getMonth(),
        disabled: isBeforeDay(date, referenceDate),
      }
    })
  }

  function openCalendar(anchor: 'start' | 'end') {
    calendarAnchor.value = anchor
    guestsOpen.value = false
    visibleMonth.value = startOfMonth(startDate.value ?? referenceDate)
    calendarOpen.value = true
  }

  function closeCalendar() {
    calendarOpen.value = false
  }

  function openGuests() {
    guestsOpen.value = true
    calendarOpen.value = false
  }

  function closeGuests() {
    guestsOpen.value = false
  }

  function updateGuestCount(kind: 'rooms' | 'adults' | 'children', delta: number) {
    if (kind === 'rooms') {
      roomCount.value = Math.max(1, roomCount.value + delta)
      return
    }

    if (kind === 'adults') {
      adultCount.value = Math.max(1, adultCount.value + delta)
      return
    }

    childCount.value = Math.max(0, childCount.value + delta)
  }

  function acceptGuests() {
    guestsOpen.value = false
  }

  function formatGuestSummary() {
    const roomsLabel = `${roomCount.value} habitación${roomCount.value > 1 ? 'es' : ''}`
    const adultsLabel = `${adultCount.value} adulto${adultCount.value > 1 ? 's' : ''}`
    const childrenLabel = `${childCount.value} niño${childCount.value === 1 ? '' : 's'}`

    return `${adultsLabel} · ${childrenLabel} · ${roomsLabel}`
  }

  function shiftVisibleMonth(offset: number) {
    visibleMonth.value = addMonths(visibleMonth.value, offset)
  }

  function selectCalendarDate(date: Date) {
    if (calendarAnchor.value === 'start') {
      startDate.value = date
      endDate.value = null
      calendarAnchor.value = 'end'
      return
    }

    if (!startDate.value || isBeforeDay(date, startDate.value)) {
      endDate.value = startDate.value
      startDate.value = date
    } else {
      endDate.value = date
    }

    calendarOpen.value = false
    guestsOpen.value = false
  }

  function getCalendarDayClass(date: Date, inCurrentMonth: boolean) {
    return [
      'calendar-day',
      !inCurrentMonth && 'calendar-day--outside',
      isBeforeDay(date, referenceDate) &&
        !isSameDay(date, referenceDate) &&
        'calendar-day--disabled',
      isSameDay(date, startDate.value) && 'calendar-day--selected-start',
      isSameDay(date, endDate.value) && 'calendar-day--selected-end',
      startDate.value &&
        endDate.value &&
        isBeforeDay(startDate.value, date) &&
        isBeforeDay(date, endDate.value) &&
        'calendar-day--in-range',
    ]
  }

  function isDateInSelectedRange(date: Date) {
    if (!startDate.value) {
      return false
    }

    if (!endDate.value) {
      return isSameDay(date, startDate.value)
    }

    return !isBeforeDay(date, startDate.value) && !isBeforeDay(endDate.value, date)
  }

  function isDateInSelectedRangeExclusive(date: Date) {
    if (!startDate.value || !endDate.value) {
      return false
    }

    return isBeforeDay(startDate.value, date) && isBeforeDay(date, endDate.value)
  }

  function isStartDate(date: Date) {
    return isSameDay(date, startDate.value)
  }

  function isEndDate(date: Date) {
    return isSameDay(date, endDate.value)
  }

  function handleDocumentClick(event: MouseEvent) {
    const target = event.target as Node | null

    if (bookingRef.value && target && !bookingRef.value.contains(target)) {
      closeCalendar()
      closeGuests()
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleDocumentClick)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleDocumentClick)
  })

  return {
    acceptGuests,
    bookingRef,
    closeCalendar,
    closeGuests,
    calendarOpen,
    calendarMonths,
    formatGuestSummary,
    formatSelectedDay,
    getCalendarDayClass,
    isDateInSelectedRangeExclusive,
    isDateInSelectedRange,
    isEndDate,
    isStartDate,
    guestCounts: {
      roomCount,
      adultCount,
      childCount,
    },
    roomCount,
    adultCount,
    childCount,
    guestsOpen,
    endDate,
    openCalendar,
    openGuests,
    selectCalendarDate,
    shiftVisibleMonth,
    startDate,
    weekdayLabels,
    updateGuestCount,
  }
}
