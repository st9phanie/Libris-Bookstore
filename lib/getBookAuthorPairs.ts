import { supabase } from '@/lib/supabaseClient'

export async function getBookAuthorPairs()  {
  const { data, error } = await supabase
    .from('bookAuthor')
    .select(`
      bookId,
      authorId,
      books(
        title,
        cover_pic
      ),
      authors(
        firstname,
        lastname,
        middlename
      )
    `);

  if (error) throw new Error(error.message);

  return data; // cast if needed
}
