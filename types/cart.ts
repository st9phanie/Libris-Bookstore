export type CartItem = {
  id: number
  uid: string
  quantity: number | null
  ebook_quantity: number | null
  bookId: number | null
  ebook_id: number | null
  books: {
    id: number
    title: string
    price: number
    cover_pic: string
  } | null
  ebooks: {
    id: number
    title: string
    price: number
    cover_pic: string
  } | null
}