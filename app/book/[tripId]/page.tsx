import SeatSelector from '@/components/SeatSelector'

export default function BookingPage({ params }: { params: { tripId: string } }) {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Booking for Trip ID: {params.tripId}</h1>
      <SeatSelector tripId={params.tripId} />
    </div>
  )
}
