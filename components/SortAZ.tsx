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
        <DropdownMenuTrigger className="outline-none flex flex-row items-center justify-between gap-x-4">
          <p>Sort by: {az ? "Title A - Z" : "Title Z - A"}  </p>
           
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 21"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m14.5 8.5l-4 4l-4-4" /></svg>

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
