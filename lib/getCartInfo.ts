// lib/getCartInfo.ts
import { createClient } from "@/utils/supabase/server";
import { CartItem } from "@/types/cart";

export async function getCartItems(uid: string): Promise<CartItem[] | null> {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("cart")
        .select(`
      id,
      uid,
      quantity,
      ebook_quantity,
      bookId,
      ebook_id,
      books(id, title, price, cover_pic),
      ebooks(id, title, price, cover_pic)
    `)
        .eq("uid", uid);

    if (error) {
        console.error("Error fetching cart:", error);
        return null;
    }

    if (!data) return null;

    const cartItems: CartItem[] = data.map((item: any) => ({
        id: item.id,
        uid: item.uid,
        quantity: item.quantity,
        ebook_quantity: item.ebook_quantity,
        bookId: item.bookId,
        ebook_id: item.ebook_id,
        books: item.books
            ? {
                id: Number(item.books.id),
                title: String(item.books.title),
                price: Number(item.books.price),
                cover_pic: String(item.books.cover_pic)
            }
            : null,
        ebooks: item.ebooks
            ? {
                id: Number(item.ebooks.id),
                title: String(item.ebooks.title),
                price: Number(item.ebooks.price),
                cover_pic: String(item.ebooks.cover_pic)

            }
            : null,
    }));

    return cartItems;
}
