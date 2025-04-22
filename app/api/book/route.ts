import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  try {
    const { tripId, seat, name, phone, email } = await req.json()

    if (!tripId || !seat || !name || !phone || !email) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    const existing = await prisma.seat.findFirst({
      where: { tripId, number: seat, booked: true },
    })

    if (existing) {
      return NextResponse.json({ error: "Seat already booked" }, { status: 409 })
    }

    await prisma.seat.updateMany({
      where: { tripId, number: seat },
      data: {
        booked: true,
        name,
        phone,
        email,
        bookedAt: new Date(),
      },
    })

    await prisma.booking.create({
      data: {
        tripId,
        seat,
        name,
        phone,
        email,
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
