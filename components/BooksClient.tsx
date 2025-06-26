// components/BooksClient.tsx
"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { SortAZ } from "./SortAZ"

interface BooksClientProps {
  initialBooks: {
    books: {
      id: number
      title: string
      year: string
      cover_pic: string
    }
    authors: {
      id: number
      firstname: string
      lastname: string
      middlename: string
    }
  }[]
}

export const BooksClient = ({ initialBooks }: BooksClientProps) => {
  const [books, setBooks] = useState(initialBooks)

  const handleSortToggle = (asc: boolean) => {
    const sorted = [...books].sort((a, b) =>
      asc
        ? a.books.title.localeCompare(b.books.title)
        : b.books.title.localeCompare(a.books.title)
    )
    setBooks(sorted)
  }

  return (
    <>
      <div className="flex items-center justify-between gap-x-4">
        <div className="relative w-full">
          <input
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-full rounded-full border-2"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
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
        <SortAZ onToggle={handleSortToggle} />
      </div>

      <div className="flex flex-wrap gap-x-[35.5px] pt-10">
        {books.map((pair, key) => (
          <div key={key} className="flex flex-col max-w-[150px] mb-10">
            <Image
              width={150}
              height={250}
              src={pair.books.cover_pic}
              alt={pair.books.title}
              className="h-[250px] w-auto object-cover"
            />
            <p className="font-bold text-sm mt-2">{pair.books.title}</p>
            <p className="text-xs text-muted-foreground">
              by {pair.authors.firstname}{" "}
              {pair.authors.middlename ? `${pair.authors.middlename} ` : ""}
              {pair.authors.lastname}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}
