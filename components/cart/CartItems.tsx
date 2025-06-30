"use client";

import Image from "next/image";
import { deleteFromCart } from "@/lib/deleteFromCart";
import { useState } from "react";
import { toast } from "sonner";
import { CartItem } from "@/types/cart";

export default function CartItems({ initialCart, uid }: { initialCart: CartItem[]; uid: string }) {
  const [cart, setCart] = useState<CartItem[]>(initialCart);

  const handleDelete = async (bookId: number) => {
    const result = await deleteFromCart(uid, bookId);
    if (result.error) {
      toast.error("Failed to remove from cart");
      console.error(result.error);
    } else {
      toast("Removed from cart");
      setCart((prev) => prev.filter((item) => item.bookId !== bookId));
    }
  };

  if (cart.length === 0) return <div>No items in cart</div>;

  return (
    <div>
      {cart.map((pair) => (
        <div key={pair.bookId} className="flex flex-col sm:flex-row sm:h-[230px] items-center py-4 border-b border-gray-300 gap-4">
          <Image
            width={150}
            height={200}
            src={pair.books?.cover_pic || "/placeholder.jpg"}
            alt={pair.books?.title || "Book"}
            className="h-[190px] w-[130px] object-cover"
          />
          <div className="flex flex-col text-left text-lg justify-between w-full h-full py-4 sm:py-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-y-2">
              <p className="font-semibold truncate">{pair.books?.title}</p>
              <div
                onClick={() => handleDelete(pair.bookId!)}
                className="text-gray-500 text-xs flex items-center gap-x-2 cursor-pointer"
              >
                <p>Remove</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M20 6h-4V5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H4a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2ZM10 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4Zm7 14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8h10Z" /></svg>
              </div>
            </div>
            <div className="flex justify-between items-center mt-2">
              <p className="text-[#E97520] font-semibold">
                <span>$</span> {pair.books?.price}
              </p>
              <p className="text-sm">Qty: {pair.quantity}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
