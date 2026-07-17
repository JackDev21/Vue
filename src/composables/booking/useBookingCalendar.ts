import { computed, ref, type Ref } from 'vue'
import {
  addDays,
  addMonths,
  formatBookingDate,
  isBeforeDay,
  isSameDay,
  startOfMonth,
} from './utils/date'

type CalendarAnchor = 'start' | 'end'

export function useBookingCalendar(params: {
  referenceDate: Date
  startDate: Ref<Date | null>
  endDate: Ref<Date | null>
}) {
  const { endDate, referenceDate, startDate } = params

  const calendarOpen = ref(false)
  const calendarAnchor = ref<CalendarAnchor>('start')
  const visibleMonth = ref(startOfMonth(referenceDate))

  const canGoBack = computed(() => {
    return visibleMonth.value.getTime() > startOfMonth(referenceDate).getTime()
  })

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

  function openCalendar(anchor: CalendarAnchor) {
    calendarAnchor.value = anchor
    visibleMonth.value = startOfMonth(startDate.value ?? referenceDate)
    calendarOpen.value = true
  }

  function closeCalendar() {
    calendarOpen.value = false
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

  function formatSelectedDay(date: Date | null) {
    return date ? formatBookingDate(date) : 'Seleccionar'
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

  return {
    calendarOpen,
    calendarMonths,
    canGoBack,
    closeCalendar,
    formatSelectedDay,
    getCalendarDayClass,
    isDateInSelectedRange,
    isDateInSelectedRangeExclusive,
    isEndDate,
    isStartDate,
    openCalendar,
    selectCalendarDate,
    shiftVisibleMonth,
    weekdayLabels,
  }
}
