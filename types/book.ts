// types/book.ts
export interface BookAuthorPair {
  books: {
    title: string
    cover_pic: string
  }
  authors: {
    firstname: string
    lastname: string
    middlename?: string
  }
}
