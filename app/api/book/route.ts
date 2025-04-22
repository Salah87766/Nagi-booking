import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { tripId, seat, name, phone, email } = data

    // Check if seat already booked
    const existing = await prisma.booking.findFirst({
      where: { tripId, seat }
    })

    if (existing) {
      return NextResponse.json({ error: 'Seat already booked' }, { status: 400 })
    }

    const booking = await prisma.booking.create({
      data: { tripId, seat, name, phone, email }
    })

    return NextResponse.json({ success: true, booking })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
