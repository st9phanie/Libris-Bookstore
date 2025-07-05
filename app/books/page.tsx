import { getBookAuthorPairs } from "@/lib/getBookAuthorPairs"
import { getGenres } from "@/lib/getGenres"
import { BooksClient } from "@/components/books-page/BooksClient"
import { getUserId } from "@/lib/getUID"
import { redirect } from "next/navigation"

export default async function BooksPage() {
    const bookAuthorPairs = await getBookAuthorPairs()
    const genres = await getGenres()
    const uid = await getUserId();
    if (!uid) {
        redirect("/login")
    }

    return (
        <div className="h-full w-full ">
                    <BooksClient initialBooks={bookAuthorPairs} genres={genres} uid={uid}/>

        </div>
    )
}