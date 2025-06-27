import { getBookAuthorPairs } from "@/lib/getBookAuthorPairs"
import { getGenres } from "@/lib/getGenres"
import { BooksClient } from "@/components/books-page/BooksClient"

export default async function BooksPage() {
    const bookAuthorPairs = await getBookAuthorPairs()
    const genres = await getGenres()

    return (
        <BooksClient initialBooks={bookAuthorPairs} genres={genres} />
    )
}