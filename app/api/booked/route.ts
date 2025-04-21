import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const tripId = searchParams.get('tripId')

  if (!tripId) {
    return NextResponse.json({ error: 'Missing tripId' }, { status: 400 })
  }

  const bookings = await prisma.booking.findMany({
    where: { tripId },
    select: { seat: true },
  })

  const takenSeats = bookings.map(b => b.seat)
  return NextResponse.json({ takenSeats })
}
