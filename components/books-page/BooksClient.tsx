"use client"

import { useEffect, useState } from "react"
import { BookAuthorGenre } from '@/types/book'
import { Sidebar } from "./sidebar";
import { BooksDisplay } from "./displayBooks";
import { SortAZ } from "../SortAZ";

interface Genre {
  id: number;
  genre: string;
}

export const BooksClient = ({ initialBooks, genres, uid }: { initialBooks: BookAuthorGenre[], genres: Genre[], uid: string|null }) => {
  const [books, setBooks] = useState(initialBooks)
  const [selectedGenreIds, setSelectedGenreIds] = useState<number[]>([])
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    const filteredBooks = selectedGenreIds.length === 0
      ? [...initialBooks]
      : initialBooks.filter(book => {
        const bookGenreIds = book.bookGenres.map(bg => bg.genres.id);
        return selectedGenreIds.every(id => bookGenreIds.includes(id));
      });

    filteredBooks.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      return sortAsc ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
    });

    setBooks(filteredBooks);
  }, [selectedGenreIds, initialBooks, sortAsc]);



  const handleGenreChange = (genreId: number, checked: boolean) => {
    setSelectedGenreIds(prev =>
      checked ? [...prev, genreId] : prev.filter(id => id !== genreId)
    )
  }

  return (
    <div className="flex flex-row w-full h-full">
      <Sidebar
        genres={genres}
        selectedGenreIds={selectedGenreIds}
        onGenreChange={handleGenreChange}
      />
      <div className="flex flex-col px-10 py-10 w-full ">
        <div className="flex flex-row items-center gap-x-3">

          <div className="flex flex-row gap-2 items-center">
            <SortAZ sortAsc={sortAsc} onToggle={setSortAsc} />
          </div>
        </div>
        <BooksDisplay books={books} uid={uid} />
      </div>
    </div >
  )
}