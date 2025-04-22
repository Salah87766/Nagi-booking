"use client"

import { useState } from "react"
import BookingForm from "./BookingForm"

type Props = { tripId: string }

export default function SeatSelector({ tripId }: Props) {
  const [selectedSeat, setSelectedSeat] = useState<number | null>(null)

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Select a Seat</h2>

      <div className="grid grid-cols-6 gap-2 mb-6">
        {Array.from({ length: 61 }).map((_, i) => {
          const seat = i + 1
          return (
            <button
              key={seat}
              className={`border p-2 rounded ${
                selectedSeat === seat ? 'bg-blue-600 text-white' : 'bg-gray-100'
              }`}
              onClick={() => setSelectedSeat(seat)}
            >
              {seat}
            </button>
          )
        })}
      </div>

      {selectedSeat && (
        <div className="mt-6">
          <h3 className="font-semibold text-lg mb-2">Confirm Booking for Seat {selectedSeat}</h3>
          <BookingForm tripId={tripId} seat={selectedSeat} />
        </div>
      )}
    </div>
  )
}
