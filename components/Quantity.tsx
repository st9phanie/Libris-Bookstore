"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Quantity({
  value,
  onChange,
  min = 1,
}: {
  value: number;
  onChange: (val: number) => void;
  min?: number;
}) {
  const handleIncrement = () => onChange(value + 1);
  const handleDecrement = () => {
    if (value > min) onChange(value - 1);
  };

  return (
    <div className="flex items-center space-x-1">
      <Button variant="ghost" onClick={handleDecrement} className="h-4 w-4 cursor-pointer ">
        <MinusIcon className="h-4 w-4" />
      </Button>
      <Input
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value) || 0)}
        min={min}
        className="w-9 bg-[#EAEEEF] border border-gray-300 px-2 py-1 text-center text-sm rounded-none "
      />
      <Button variant="ghost" onClick={handleIncrement} className="h-4 w-4 cursor-pointer ">
        <PlusIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}

function MinusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}