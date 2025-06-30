import { getCartItems } from "@/lib/getCartInfo";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";

export default async function Cart() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user?.id) {
    console.error("No user found");
    return <div>Please log in to view your cart.</div>;
  }

  const uid = data.user.id;
  const cart = await getCartItems(uid);

  if (!cart || cart.length === 0) {
    return <div>No items in cart</div>;
  }

  return (
    <div className="flex flex-col md:flex-row open-sans text-[#132934] w-full min-h-screen overflow-x-hidden">
      {/* Cart Section */}
      <div className="flex flex-col px-4 md:px-10 w-full md:w-3/5">
        <p className="text-3xl md:text-4xl viaoda font-bold mb-4 py-6">My Cart</p>

        {cart.map((pair, key) => (
          <div
            key={key}
            className="flex flex-col sm:flex-row sm:h-[230px] items-center py-4 border-b border-gray-300 gap-4"
          >
            <Image
              width={150}
              height={200}
              src={pair.books?.cover_pic || pair.ebooks?.cover_pic || "/placeholder.jpg"}
              alt={pair.books?.title || pair.ebooks?.title || "Book"}
              className="h-[190px] w-[130px] object-cover"
            />

            <div className="flex flex-col text-left text-lg justify-between w-full h-full py-4 sm:py-10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-y-2">
                <p className="font-semibold truncate">
                  {pair.books?.title || pair.ebooks?.title}
                </p>
                <div className="text-gray-500 text-xs flex items-center gap-x-2 cursor-pointer">
                  <p>Remove</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
                    <path
                      fill="currentColor"
                      d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex justify-between items-center mt-2">
                <p className="text-[#E97520] font-semibold">
                  <span>$</span> {pair.books?.price ?? pair.ebooks?.price}
                </p>
                <p className="text-sm">Qty: {pair.quantity || pair.ebook_quantity}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Checkout Section */}
      <div className="bg-[#EBEBE5] w-full md:w-2/5 flex flex-col px-4 md:px-10 py-6">
        <p className="text-3xl md:text-4xl viaoda font-bold mb-4">Checkout</p>
        {/* You can add totals, buttons, etc. here */}
      </div>
    </div>
  );
}
