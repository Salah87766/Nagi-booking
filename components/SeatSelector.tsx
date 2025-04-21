'use client'

import { useEffect, useState } from 'react'
import { bookTrip } from '@/lib/bookTrip'

export default function SeatSelector({ tripId }: { tripId: string }) {
  const [selectedSeat, setSelectedSeat] = useState<number | null>(null)
  const [form, setForm] = useState({ name: '', phone: '', email: '' })
  const [loading, setLoading] = useState(false)
  const [takenSeats, setTakenSeats] = useState<number[]>([])

  useEffect(() => {
    fetch('/api/booked?tripId=' + tripId)
      .then(res => res.json())
      .then(data => setTakenSeats(data.takenSeats || []))
  }, [tripId])

  const handleBook = async () => {
    if (!selectedSeat || !form.name || !form.phone || !form.email) return
    setLoading(true)
    const res = await bookTrip({ ...form, seat: selectedSeat, tripId })
    setLoading(false)
    if (res.success) {
      alert('Booking successful!')
      setTakenSeats([...takenSeats, selectedSeat])
      setSelectedSeat(null)
    } else {
      alert('Booking failed.')
    }
  }

  return (
    <div>
      <h2 className="text-lg mb-2">Select a seat:</h2>
      <div className="grid grid-cols-6 gap-2 mb-4">
        {Array.from({ length: 61 }).map((_, i) => {
          const seat = i + 1
          const taken = takenSeats.includes(seat)
          const isSelected = selectedSeat === seat
          return (
            <button
              key={seat}
              className={`border p-2 rounded ${taken ? 'bg-gray-300' : isSelected ? 'bg-green-500 text-white' : ''}`}
              disabled={taken}
              onClick={() => setSelectedSeat(seat)}
            >
              {seat}
            </button>
          )
        })}
      </div>

      <input
        className="border p-2 w-full mb-2"
        placeholder="Full Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />
      <input
        className="border p-2 w-full mb-2"
        placeholder="Phone"
        value={form.phone}
        onChange={e => setForm({ ...form, phone: e.target.value })}
      />
      <input
        className="border p-2 w-full mb-2"
        placeholder="Email"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
      />
      <button
        onClick={handleBook}
        disabled={loading}
        className="bg-black text-white w-full py-2 rounded"
      >
        {loading ? 'Booking...' : 'Confirm Booking'}
      </button>
    </div>
  )
}
