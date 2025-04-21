'use client'

import { useState } from 'react'
import { bookTrip } from '@/lib/bookTrip'

export default function BookingForm({ tripId }: { tripId: string }) {
  const [form, setForm] = useState({ seat: 1, name: '', phone: '', email: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const res = await bookTrip({ ...form, tripId, seat: Number(form.seat) })
    setLoading(false)
    if (res.success) setSuccess(true)
    else setError('Failed to book seat')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded">
      <div>
        <label>Seat</label>
        <input
          type="number"
          name="seat"
          min={1}
          max={61}
          required
          className="border px-2 py-1 w-full"
          value={form.seat}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Name</label>
        <input
          name="name"
          required
          className="border px-2 py-1 w-full"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Phone</label>
        <input
          name="phone"
          required
          className="border px-2 py-1 w-full"
          value={form.phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          className="border px-2 py-1 w-full"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2">
        {loading ? 'Booking...' : 'Book Now'}
      </button>
      {success && <p className="text-green-600">Booking successful!</p>}
      {error && <p className="text-red-600">{error}</p>}
    </form>
  )
}
