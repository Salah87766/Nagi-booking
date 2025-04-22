"use client"

import { useEffect, useState } from "react"
import BookingForm from "./BookingForm"

type Props = { tripId: string }

type Booking = {
  seat: number
}

export default function SeatSelector({ tripId }: Props) {
  const [selected, setSelected] = useState<number | null>(null)
  const [booked, setBooked] = useState<number[]>([])

  useEffect(() => {
    fetch(`/api/booked?tripId=${tripId}`)
      .then(res => res.json())
      .then(data => setBooked(data.map((b: Booking) => b.seat)))
  }, [tripId])

  return (
    <div>
      <div className="grid grid-cols-6 gap-2 mb-6">
        {Array.from({ length: 61 }, (_, i) => i + 1).map(seat => {
          const isBooked = booked.includes(seat)
          const isSelected = selected === seat
          return (
            <button
              key={seat}
              className={`p-2 rounded text-sm ${
                isBooked ? 'bg-gray-400' :
                isSelected ? 'bg-green-500 text-white' :
                'bg-blue-500 text-white'
              }`}
              disabled={isBooked}
              onClick={() => setSelected(seat)}
            >
              {seat}
            </button>
          )
        })}
      </div>
      {selected && <BookingForm tripId={tripId} seat={selected} />}
    </div>
  )
}
