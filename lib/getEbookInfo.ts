import { cache } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { ebookAuthorGenre } from '@/types/ebook';

export const getEbookInfo = cache(async (): Promise<ebookAuthorGenre[]> => {
  const { data, error } = await supabase
    .from('ebooks')
    .select(`
      id,
      title,
      cover_pic,
      price,
      ebookAuthor (
        authors (
          firstname,
          lastname,
          middlename
        )
      ),
      ebookGenres (
        genres (
          id,
          genre
        )
      )
    `);

  if (error) throw new Error(error.message);

  // Fix: Map bookGenres.genres from array to single object
  return (data ?? []).map((book: any) => ({
    ...book,
    ebookAuthor: (book.ebookAuthor ?? []).map((ba: any) => ({
      authors: ba.authors
    })),
    ebookGenres: (book.ebookGenres ?? []).map((bg: any) => ({
      genres: Array.isArray(bg.genres) ? bg.genres[0] : bg.genres
    }))
  })) as ebookAuthorGenre[];
});