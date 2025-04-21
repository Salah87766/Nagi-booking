import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const body = await req.json();
  const { tripId, seat, name, phone, email } = body;

  if (!tripId || !seat || !name || !phone || !email) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const booking = await prisma.booking.create({
    data: { tripId, seat, name, phone, email },
  });

  return NextResponse.json(booking);
}
