// lib/addToCart.ts
import { supabase } from '@/lib/supabaseClient';

export async function addToCart(uid: string, bookId: number, quantity: number) {
  console.log("uid", uid);

  const { data: existingCartItem, error: selectError } = await supabase
    .from('cart')
    .select('quantity') 
    .eq('uid', uid)
    .eq('bookId', bookId)
    .single(); 

  if (selectError && selectError.code !== 'PGRST116') { 
    console.error('Error checking existing cart item:', selectError);
    return { error: selectError };
  }

  let finalQuantity: number;

  if (existingCartItem) {
    finalQuantity = existingCartItem.quantity + quantity;
  } else {
    finalQuantity = quantity;
  }

  const { data, error: upsertError } = await supabase
    .from('cart')
    .upsert(
      { uid, bookId, quantity: finalQuantity }, 
      { onConflict: 'uid,bookId' }
    );

  if (upsertError) {
    console.error('Error adding to cart:');
    console.error('Code:', upsertError.code);
    console.error('Message:', upsertError.message);
    console.error('Details:', upsertError.details);
    console.error('Hint:', upsertError.hint);
    console.error('Full Error Object:', upsertError);
    return { error: upsertError };
  }

  return { data };
}