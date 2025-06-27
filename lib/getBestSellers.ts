import { cache } from 'react';
import { supabase } from '@/lib/supabaseClient';

export const getBestsellers = cache(async () => {
  const { data, error } = await supabase
    .from('bestsellers')
    .select(`
      bookAuthorId,
      bookAuthor:bookAuthorId (
        id,
        books (
          title,
          cover_pic
        ),
        authors (
          firstname,
          lastname,
          middlename
        )
      )
    `)

  if (error) throw new Error(error.message);

  return data;
});
