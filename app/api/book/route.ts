import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  const body = await req.json()
  const { tripId, seat, name, phone, email } = body

  if (!tripId || !seat || !name || !phone) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  try {
    const seatRecord = await prisma.seat.updateMany({
      where: { tripId, number: seat, booked: false },
      data: {
        booked: true,
        name,
        phone,
        email,
        bookedAt: new Date()
      }
    })

    if (seatRecord.count === 0) {
      return NextResponse.json({ error: 'Seat already booked' }, { status: 409 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
