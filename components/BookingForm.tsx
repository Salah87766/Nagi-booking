"use client"

import { useState } from "react"
import { bookTrip } from "@/lib/bookTrip"

type Props = {
  tripId: string
  seat: number
}

export default function BookingForm({ tripId, seat }: Props) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: any) {
    e.preventDefault()
    setLoading(true)

    const res = await bookTrip({ ...form, tripId, seat })
    setLoading(false)

    if (res.success) {
      setSuccess(true)
    } else {
      alert("Booking failed. Try again.")
    }
  }

  if (success) {
    return <div className="p-4 bg-green-100 rounded">Booking confirmed for seat {seat}!</div>
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        required
        type="text"
        placeholder="Name"
        className="w-full border p-2 rounded"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />
      <input
        required
        type="tel"
        placeholder="Phone"
        className="w-full border p-2 rounded"
        value={form.phone}
        onChange={e => setForm({ ...form, phone: e.target.value })}
      />
      <input
        required
        type="email"
        placeholder="Email"
        className="w-full border p-2 rounded"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white p-2 rounded w-full"
      >
        {loading ? 'Booking...' : `Confirm Seat ${seat}`}
      </button>
    </form>
  )
}
