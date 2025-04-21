"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black p-6">
      <h1 className="text-2xl font-bold mb-4">Nagi Booking</h1>
      <p className="mb-4">Welcome to our bus ticket booking system.</p>

      <Link
        href="/book/abc123"
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Book Sample Trip
      </Link>
    </main>
  );
}
