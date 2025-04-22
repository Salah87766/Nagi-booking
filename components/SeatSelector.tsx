"use client"

import BookingForm from "./BookingForm"

export default function SeatSelector({ tripId }: { tripId: string }) {
  return (
    <div className="p-4 border rounded-xl max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-bold text-center">Reserve Your Seat</h2>
      <BookingForm tripId={tripId} />
    </div>
  )
}
