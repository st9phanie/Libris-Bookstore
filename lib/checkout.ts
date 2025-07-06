"use server"
import { createClient } from "@/utils/supabase/server";

import { supabase } from "./supabaseClient";
import { CartItem } from "@/types/cart";
import { getUserId } from "./getUID";

export async function checkoutOrder(items: CartItem[], total: number) {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.getUser();

    if (error || !data?.user?.id) {
        return null;
    }

    const uid= data.user.id;

    const { data: orderData, error: orderError } = await supabase
        .from('orders')
        .insert({ total: total, uid: uid })
        .select() // Needed to get inserted order back
        .single(); // Ensure only one row is returned

    if (orderError || !orderData) {
        console.error('Error inserting order:', orderError);
        return null;
    }

    const orderId = orderData.id;
    console.log(orderData)
    return await checkoutItems(items, orderId);
}

export async function checkoutItems(items: CartItem[], orderId: number) {
    const orderItems = items.map(item => ({
        orderId,
        bookId: item.bookId,
        quantity: item.quantity,
        price: item.books!.price,
    }));

    const { data, error } = await supabase
        .from('orderItem')
        .insert(orderItems);

    if (error) {
        console.error('Error inserting order items:', error);
        return null;
    }

    return data;
}
