import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useBookingCalendar } from './booking/useBookingCalendar'
import { useBookingGuests } from './booking/useBookingGuests'

export function useBooking() {
  const bookingRef = ref<HTMLElement | null>(null)
  const referenceDate = new Date(2026, 6, 10)
  const startDate = ref<Date | null>(new Date(2026, 6, 10))
  const endDate = ref<Date | null>(new Date(2026, 6, 11))
  const guests = useBookingGuests()
  const calendar = useBookingCalendar({
    endDate,
    referenceDate,
    startDate,
  })

  function openCalendar(anchor: 'start' | 'end') {
    guests.closeGuests()
    calendar.openCalendar(anchor)
  }

  function openGuests() {
    calendar.closeCalendar()
    guests.openGuests()
  }

  function selectCalendarDate(date: Date) {
    calendar.selectCalendarDate(date)
    guests.closeGuests()
  }

  function handleDocumentClick(event: MouseEvent) {
    const target = event.target as Node | null

    if (bookingRef.value && target && !bookingRef.value.contains(target)) {
      calendar.closeCalendar()
      guests.closeGuests()
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleDocumentClick)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleDocumentClick)
  })

  return {
    acceptGuests: guests.acceptGuests,
    adultCount: guests.adultCount,
    bookingRef,
    calendarOpen: calendar.calendarOpen,
    calendarMonths: calendar.calendarMonths,
    canGoBack: calendar.canGoBack,
    childCount: guests.childCount,
    closeCalendar: calendar.closeCalendar,
    closeGuests: guests.closeGuests,
    endDate,
    formatGuestSummary: guests.formatGuestSummary,
    formatSelectedDay: calendar.formatSelectedDay,
    getCalendarDayClass: calendar.getCalendarDayClass,
    guestCounts: {
      adultCount: guests.adultCount,
      childCount: guests.childCount,
      roomCount: guests.roomCount,
    },
    guestsOpen: guests.guestsOpen,
    isDateInSelectedRange: calendar.isDateInSelectedRange,
    isDateInSelectedRangeExclusive: calendar.isDateInSelectedRangeExclusive,
    isEndDate: calendar.isEndDate,
    isStartDate: calendar.isStartDate,
    openCalendar,
    openGuests,
    roomCount: guests.roomCount,
    selectCalendarDate,
    shiftVisibleMonth: calendar.shiftVisibleMonth,
    startDate,
    updateGuestCount: guests.updateGuestCount,
    weekdayLabels: calendar.weekdayLabels,
  }
}
