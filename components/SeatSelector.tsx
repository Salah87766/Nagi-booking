"use client"

type Props = {
  selectedSeats: number[]
  onSelect: (seat: number) => void
}

export default function SeatSelector({ selectedSeats, onSelect }: Props) {
  const seats = Array.from({ length: 61 }, (_, i) => i + 1)

  return (
    <div className="grid grid-cols-6 gap-2">
      {seats.map((seat) => (
        <button
          key={seat}
          onClick={() => onSelect(seat)}
          className={`p-2 rounded-md border ${
            selectedSeats.includes(seat)
              ? 'bg-green-500 text-white'
              : 'bg-white text-black'
          }`}
        >
          {seat}
        </button>
      ))}
    </div>
  )
}
