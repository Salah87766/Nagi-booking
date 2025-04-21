export default function BookingPage({ params }: { params: { tripId: string } }) {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Booking Trip: {params.tripId}</h1>
      <p>Seat selection and booking logic goes here.</p>
    </div>
  );
}
