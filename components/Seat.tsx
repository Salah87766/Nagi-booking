\"use client\";
import { useState } from \"react\";

type Props = {
  number: number;
  onSelect: (seat: number) => void;
  selected: boolean;
};

export default function Seat({ number, onSelect, selected }: Props) {
  const [locked, setLocked] = useState(false);

  const handleClick = () => {
    if (locked) return;
    setLocked(true);
    onSelect(number);
    setTimeout(() => setLocked(false), 15000); // unlock after 15s
  };

  return (
    <div
      onClick={handleClick}
      className={`${selected ? \"bg-blue-500\" : \"bg-green-200\"} 
        w-10 h-10 text-center rounded cursor-pointer flex items-center justify-center`}
    >
      {number}
    </div>
  );
}
