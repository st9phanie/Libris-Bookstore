import { cache } from 'react';
import { supabase } from '@/lib/supabaseClient'


export const getBookAuthorPairs = cache(async () => {
  const { data, error } = await supabase
    .from('bookAuthor')
    .select(`bookId,
      authorId,
      books (
        id,
        title,
        year,
        cover_pic,
        isbn
      ),
      authors (
        id,
        firstname,
        lastname,
        middlename
      )
    `);

  if (error) throw new Error(error.message);

  return data;
});