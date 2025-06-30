export type CartItem = {
  uid: string
  quantity: number | null
  bookId: number | null
  books: {
    id: number
    title: string
    price: number
    cover_pic: string
  } | null

}