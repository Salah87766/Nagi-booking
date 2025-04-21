type Props = {
  tripId: string
}

import { bookTrip } from '../lib/bookTrip'
import { useState } from 'react'

export default function SeatSelector({ tripId }: Props) {
  const [form, setForm] = useState({ seat: 1, name: '', phone: '', email: '' })
  const [loading, setLoading] = useState(false)

  const handleBook = async () => {
    setLoading(true)
    await bookTrip({ ...form, tripId })
    setLoading(false)
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-6 gap-2 mb-4">
        {Array.from({ length: 61 }).map((_, i) => {
          const seat = i + 1
          return (
            <button
              key={seat}
              onClick={() => setForm({ ...form, seat })}
              className={`border p-2 ${form.seat === seat ? 'bg-black text-white' : ''}`}
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
