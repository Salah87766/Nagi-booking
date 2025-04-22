import SeatSelector from "@/components/SeatSelector"

export default function BookingPage({ params }: { params: { tripId: string } }) {
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Booking for Trip: {params.tripId}</h1>
      <SeatSelector tripId={params.tripId} />
    </div>
  )
}
