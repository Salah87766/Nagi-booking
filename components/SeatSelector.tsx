'use client';
import { useState } from "react";
import { bookTrip } from "@/lib/bookTrip";

export default function SeatSelector({ tripId }: { tripId: string }) {
  const [selectedSeat, setSelectedSeat] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [loading, setLoading] = useState(false);

  const handleBook = async () => {
    if (!selectedSeat) return;
    setLoading(true);
    const res = await bookTrip({ ...form, tripId, seat: selectedSeat });
    setLoading(false);
    alert(res.success ? "Booked!" : "Failed");
  };

  return (
    <div>
      <div className="grid grid-cols-6 gap-2 mb-4">
        {Array.from({ length: 61 }).map((_, i) => {
          const seat = i + 1;
          return (
            <button
              key={seat}
              onClick={() => setSelectedSeat(seat)}
              className={`p-2 border rounded ${selectedSeat === seat ? 'bg-green-500 text-white' : ''}`}
            >
              {seat}
            </button>
          );
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
        {loading ? "Booking..." : "Confirm Booking"}
      </button>
    </div>
  );
}
