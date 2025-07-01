import { useMemo } from "react";
import { CartItem } from "@/types/cart";

export const Checkout = ({ cart }: { cart: CartItem[]}) => {
    const total = useMemo(() => {
        return cart.reduce(
            (sum, item) => sum + (item.books?.price ?? 0) * (item.quantity ?? 0),
            0
        );
    }, [cart]);

    return (
        <div className="bg-[#EBEBE5] p-6 w-full lg:w-2/5">
            <p className="text-3xl md:text-4xl viaoda font-bold mb-4 pt-4">Checkout</p>
            <div className="border-b border-gray-300 pt-2 pb-4">
                {cart.map((pair) => (
                    <div key={pair.bookId} className="flex justify-between items-center text-sm mb-2">
                        <div className="flex gap-2">
                            <p>{pair.quantity}x</p>
                            <p className="truncate">{pair.books?.title}</p>
                        </div>
                        <p>${(pair.books?.price ?? 0) * pair.quantity!}</p>
                    </div>
                ))}
            </div>
            <div className="font-bold flex justify-between text-lg py-4">
                <p>Total</p>
                <p>${total.toFixed(2)}</p>
            </div>
            <button className="text-white w-full bg-[#E97520] px-4 py-2 cursor-pointer hover:bg-[#CB6E24] transition">
                Checkout
            </button>
        </div>
    );
};
