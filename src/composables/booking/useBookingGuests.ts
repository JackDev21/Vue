import { ref } from 'vue'

type GuestKind = 'rooms' | 'adults' | 'children'

export function useBookingGuests() {
  const guestsOpen = ref(false)
  const roomCount = ref(1)
  const adultCount = ref(2)
  const childCount = ref(0)

  function openGuests() {
    guestsOpen.value = true
  }

  function closeGuests() {
    guestsOpen.value = false
  }

  function updateGuestCount(kind: GuestKind, delta: number) {
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

  return {
    acceptGuests,
    adultCount,
    childCount,
    closeGuests,
    formatGuestSummary,
    guestsOpen,
    openGuests,
    roomCount,
    updateGuestCount,
  }
}
