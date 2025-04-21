"use client";
import { useState } from "react";

type Props = {
  onSubmit: (data: { name: string; phone: string; email: string }) => void;
};

export default function PassengerForm({ onSubmit }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, phone, email });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <input
        required
        placeholder="Name"
        className="border p-2 w-full"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        required
        placeholder="Phone"
        className="border p-2 w-full"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        required
        placeholder="Email"
        className="border p-2 w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        className="bg-black text-white py-2 px-4 rounded"
      >
        Confirm Booking
      </button>
    </form>
  );
}
