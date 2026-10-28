import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const BookingContext = createContext(null)
const SESSION_KEY = 'cinebook.pendingBooking'

function readPending() {
  try {
    return JSON.parse(sessionStorage.getItem(SESSION_KEY) || 'null')
  } catch {
    return null
  }
}

export function BookingProvider({ children }) {
  const [pendingBooking, setPendingBookingState] = useState(readPending)

  const setPendingBooking = useCallback((booking) => {
    setPendingBookingState(booking)
    if (booking) {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(booking))
    } else {
      sessionStorage.removeItem(SESSION_KEY)
    }
  }, [])

  const clearPendingBooking = useCallback(() => setPendingBooking(null), [setPendingBooking])

  const value = useMemo(
    () => ({ pendingBooking, setPendingBooking, clearPendingBooking }),
    [pendingBooking, setPendingBooking, clearPendingBooking],
  )

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
}

export function useBooking() {
  const context = useContext(BookingContext)
  if (!context) {
    throw new Error('useBooking must be used within BookingProvider')
  }
  return context
}
