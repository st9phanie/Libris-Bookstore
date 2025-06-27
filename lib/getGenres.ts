import { supabase } from '@/lib/supabaseClient'

export async function getGenres() {
    const { data, error } = await supabase
        .from('genres')
        .select(`id,
      genre`);

    if (error) throw new Error(error.message);

    return data; // cast if needed
}
