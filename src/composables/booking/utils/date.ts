export function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

export function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

export function addDays(date: Date, days: number) {
  const nextDate = new Date(date)
  nextDate.setDate(nextDate.getDate() + days)
  return nextDate
}

export function addMonths(date: Date, months: number) {
  const nextDate = new Date(date)
  nextDate.setMonth(nextDate.getMonth() + months)
  return startOfMonth(nextDate)
}

export function isSameDay(firstDate: Date | null, secondDate: Date | null) {
  if (!firstDate || !secondDate) {
    return false
  }

  return (
    firstDate.getFullYear() === secondDate.getFullYear() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getDate() === secondDate.getDate()
  )
}

export function isBeforeDay(firstDate: Date, secondDate: Date) {
  return startOfDay(firstDate).getTime() < startOfDay(secondDate).getTime()
}

export function formatBookingDate(date: Date | null) {
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
