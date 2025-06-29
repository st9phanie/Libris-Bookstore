import { getEbookInfo } from "@/lib/getEbookInfo"
import { getGenres } from "@/lib/getGenres"
import { EbooksClient } from "@/components/ebooks-page/ebooksClient"

export default async function eBooksPage() {
    const bookAuthorPairs = await getEbookInfo()
    const genres = await getGenres()

    return (
        <EbooksClient initialBooks={bookAuthorPairs} genres={genres} />
    )
}