"use client"

import { useEffect, useState } from "react"
import { BookAuthorGenre } from '@/types/book'
import { Sidebar } from "./sidebar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { BooksDisplay } from "./displayBooks";

interface Genre {
  id: number;
  genre: string;
}

export const BooksClient = ({
  initialBooks,
  genres,
}: {
  initialBooks: BookAuthorGenre[],
  genres: Genre[]
}) => {
  const [books, setBooks] = useState(initialBooks)
  const [selectedGenreIds, setSelectedGenreIds] = useState<number[]>([])

  useEffect(() => {
    if (selectedGenreIds.length === 0) {
      setBooks(initialBooks)
    } else {
      setBooks(
        initialBooks.filter(book =>
          book.bookGenres.some(bg =>
            selectedGenreIds.includes(bg.genres.id)
          )
        )
      )
    }
  }, [selectedGenreIds, initialBooks])

  const handleGenreChange = (genreId: number, checked: boolean) => {
    setSelectedGenreIds(prev =>
      checked ? [...prev, genreId] : prev.filter(id => id !== genreId)
    )
  }

  return (
    <div className="flex flex-row w-full">
      <Sidebar
        genres={genres}
        selectedGenreIds={selectedGenreIds}
        onGenreChange={handleGenreChange}
      />
      <div className="flex flex-col px-10 py-10 mr-29 w-full ">
        <div className="flex flex-row items-center gap-x-3">
          <div className="relative w-full ">
            <input
              placeholder="Search..."
              className="pl-12 pr-4 py-2 w-full border rounded-full border-gray-300 bg-[#fdfdfd]"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33l-1.42 1.42l-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
              />
            </svg>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 text-[#132934] space-x-10 font-semibold cursor-pointer outline-none">
                <div className="flex flex-row gap-2 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M3 6h18M6 12h12m-9 6h6" /></svg>
                </div>

              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                </DropdownMenuItem>

              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <BooksDisplay books={books} />
      </div>
    </div >
  )
}