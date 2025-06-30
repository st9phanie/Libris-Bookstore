import { getCartItems } from "@/lib/getCartInfo";
import { getUserId } from "@/lib/getUID";
import { redirect } from "next/navigation";
import CartItems from "@/components/cart/CartItems";
import { CartItem } from "@/types/cart";

export default async function Cart() {
  const uid = await getUserId();
  if (!uid) redirect("/login");

  const cart: CartItem[] | null = await getCartItems(uid);

  return (
    <div className="flex flex-col md:flex-row open-sans text-[#132934] w-full min-h-screen overflow-x-hidden">
      {/* Cart Section */}
      <div className="flex flex-col px-4 md:px-10 w-full md:w-3/5">
        <p className="text-3xl md:text-4xl viaoda font-bold mb-4 py-6">My Cart</p>
        {cart && cart.length > 0 ? (
          <CartItems initialCart={cart} uid={uid} />
        ) : (
          <div>No items in cart</div>
        )}
      </div>
      {/* Checkout Section */}
      <div className="bg-[#EBEBE5] w-full md:w-2/5 flex flex-col px-4 md:px-10 py-6">
        <p className="text-3xl md:text-4xl viaoda font-bold mb-4">Checkout</p>
        {/* Checkout content here */}
      </div>
    </div>
  );
}
