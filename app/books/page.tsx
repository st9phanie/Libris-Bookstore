// app/books/page.tsx
import { getBookAuthorPairs } from "@/lib/getBookAuthorPairs"
import { BooksClient } from "@/components/BooksClient"

export default async function BooksPage() {
  const bookAuthorPairs = await getBookAuthorPairs()

  return (
    <div className="px-32 py-10">
      <BooksClient initialBooks={bookAuthorPairs} />
    </div>
  )
}
