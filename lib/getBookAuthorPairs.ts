import { cache } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { BookAuthorGenre } from '@/types/book';

export const getBookAuthorPairs = cache(async (): Promise<BookAuthorGenre[]> => {
  const { data, error } = await supabase
    .from('books')
    .select(`
      id,
      title,
      cover_pic,
      price,
      bookAuthor (
        authors (
          firstname,
          lastname,
          middlename
        )
      ),
      bookGenres (
        genres (
          id,
          genre
        )
      )
    `);

  if (error) throw new Error(error.message);

  return (data ?? []).map((book: any) => ({
    ...book,
    bookAuthor: (book.bookAuthor ?? []).map((ba: any) => ({
      authors: ba.authors
    })),
    bookGenres: (book.bookGenres ?? []).map((bg: any) => ({
      genres: Array.isArray(bg.genres) ? bg.genres[0] : bg.genres
    }))
  })) as BookAuthorGenre[];
});