type Props = { tripId: string }

export default function SeatSelector({ tripId }: Props) {
  return (
    <div>
      Seat selector component for trip: {tripId}
    </div>
  )
}
