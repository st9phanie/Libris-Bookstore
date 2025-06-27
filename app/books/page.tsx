// app/books/page.tsx
import { getBookAuthorPairs } from "@/lib/getBookAuthorPairs"
import { BooksClient } from "@/components/books-page/BooksClient"
import { getGenres } from "@/lib/getGenres"
import { Sidebar } from "@/components/books-page/sidebar"


export default async function BooksPage() {
    const bookAuthorPairs = await getBookAuthorPairs()
        const genres = await getGenres()


    return (
  
            <div className="flex flex-row">
                <Sidebar genres={genres}/>
                <BooksClient initialBooks={bookAuthorPairs} />

            </div>
    )
}
