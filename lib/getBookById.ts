import { cache } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { BookAuthorGenre } from '@/types/book';

export const getBookById = cache(async (id: number): Promise<BookAuthorGenre | null> => {
  const { data, error } = await supabase
    .from('books')
    .select(`
      id,
      title,
      cover_pic,
      price,
      overview,
      publisher,
      page_count,
      language,
      isbn,
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
    `)
    .eq('id', id)
    .single(); // Use .single() to get a single record

  if (error) {
    if (error.code === 'PGRST116') { // Supabase returns PGRST116 for no rows found with .single()
      return null;
    }
    throw new Error(error.message);
  }

  if (!data) return null;

  return {
    ...data,
    bookAuthor: (data.bookAuthor ?? []).map((ba: any) => ({
      authors: ba.authors
    })),
    bookGenres: (data.bookGenres ?? []).map((bg: any) => ({
      genres: Array.isArray(bg.genres) ? bg.genres[0] : bg.genres
    }))
  } as BookAuthorGenre;
});