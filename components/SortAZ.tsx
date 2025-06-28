"use client"

import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

interface SortAZProps {
  onToggle: (az: boolean) => void
}

export const SortAZ = ({ onToggle }: SortAZProps) => {
  const [az, setAZ] = useState(true)

  const setAZSort = () => {
    setAZ(true)
    onToggle(true)
  }

  const setZASort = () => {
    setAZ(false)
    onToggle(false)
  }

  return (
    <div className="cursor-pointer border px-3 py-1 bg-[#EBEBE5]">
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <p>Sort by: {az ? "Title A - Z" : "Title Z - A"}</p>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={setAZSort}>
            Title: A - Z
          </DropdownMenuItem>
          <DropdownMenuItem onClick={setZASort}>
            Title: Z - A
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
