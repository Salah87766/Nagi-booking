import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const tripId = searchParams.get("tripId")

  if (!tripId) {
    return NextResponse.json({ error: "Trip ID is required" }, { status: 400 })
  }

  try {
    const seats = await prisma.seat.findMany({
      where: { tripId },
      orderBy: { number: "asc" },
    })

    return NextResponse.json({ seats })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Failed to fetch seats" }, { status: 500 })
  }
}
