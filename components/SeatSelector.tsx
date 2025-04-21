"use client"

type SeatSelectorProps = {
  selected: number[]
  onSelect: (seat: number) => void
}

export default function SeatSelector({ selected, onSelect }: SeatSelectorProps) {
  const seats = Array.from({ length: 61 }, (_, i) => i + 1)

  return (
    <div className="grid grid-cols-5 gap-2">
      {seats.map(seat => (
        <button
          key={seat}
          className={`p-2 rounded border ${
            selected.includes(seat) ? 'bg-green-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => onSelect(seat)}
        >
          {seat}
        </button>
      ))}
    </div>
  )
}
