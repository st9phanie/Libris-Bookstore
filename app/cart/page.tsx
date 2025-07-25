import { getCartItems } from "@/lib/getCartInfo";
import { getUserId } from "@/lib/getUID";
import { redirect } from "next/navigation";
import CartItems from "@/components/cart/CartItems";
import { CartItem } from "@/types/cart";
import { getBookAuthorPairs } from "@/lib/getBookAuthorPairs";
import { BookAuthorGenre } from "@/types/book";

export default async function Cart() {
  const uid = await getUserId();
  if (!uid) redirect("/login");

  const cart: CartItem[] | null = await getCartItems(uid);
  const books:BookAuthorGenre[] = await getBookAuthorPairs()

  return (
    <div className="flex flex-col md:flex-row open-sans text-[#132934] w-full min-h-screen">
      {/* Cart Section */}
      <div className="flex flex-col  w-full">
        {cart && cart.length > 0 ? (
          <CartItems initialCart={cart} uid={uid} books={books}/>
        ) : (
          <div>No items in cart</div>
        )}
      </div>

    </div>
  );
}
