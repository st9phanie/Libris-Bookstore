import { supabase } from "@/lib/supabaseClient";

export async function deleteFromCart(uid: string, bookId: number ) {
  const { data, error } = await supabase
    .from("cart")
    .delete()
    .match({ uid, bookId });

  if (error) {
    console.error("Error deleting cart item:", error);
    return { error };
  }

  return { data };
}
