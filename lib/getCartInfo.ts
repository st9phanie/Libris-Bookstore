// lib/getCartInfo.ts
import { createClient } from "@/utils/supabase/server";
import { CartItem } from "@/types/cart";

export async function getCartItems(uid: string): Promise<CartItem[] | null> {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("cart")
        .select(`
      uid,
      quantity,
      bookId,
      books(id, title, price, cover_pic)
    `)
        .eq("uid", uid);

    if (error) {
        console.error("Error fetching cart:", error);
        return null;
    }

    if (!data) return null;

    const cartItems: CartItem[] = data.map((item: any) => ({
        uid: item.uid,
        quantity: item.quantity,
        bookId: item.bookId,
        books: item.books
            ? {
                id: Number(item.books.id),
                title: String(item.books.title),
                price: Number(item.books.price),
                cover_pic: String(item.books.cover_pic)
            }
            : null
    }));

    return cartItems;
}
