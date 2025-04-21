import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const booking = await prisma.booking.create({ data })
    return NextResponse.json({ success: true, booking })
  } catch (error) {
    console.error('Booking error:', error)
    return NextResponse.json({ success: false, error: 'Booking failed' }, { status: 500 })
  }
}
