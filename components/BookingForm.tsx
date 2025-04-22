"use client"

import { useState } from "react"
import { bookTrip } from "@/lib/bookTrip"

export default function BookingForm({ tripId }: { tripId: string }) {
  const [seat, setSeat] = useState<number | null>(null)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async () => {
    if (!seat || !name || !phone || !email) {
      setMessage("Please fill in all fields and select a seat.")
      return
    }

    setLoading(true)
    try {
      const result = await bookTrip({ tripId, seat, name, phone, email })
      if (result.success) {
        setMessage("Booking successful!")
      } else {
        setMessage("Booking failed. Try another seat.")
      }
    } catch {
      setMessage("Server error.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <label>Seat Number</label>
        <input
          type="number"
          value={seat || ""}
          onChange={e => setSeat(parseInt(e.target.value))}
          className="border p-2 w-full"
          placeholder="Enter seat number"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Booking..." : "Confirm Booking"}
      </button>
      {message && <p className="text-sm text-center mt-2">{message}</p>}
    </div>
  )
}
