import { DisplayBookInfo } from '@/components/book-page/displayBookInfo';
import { getBookById } from "@/lib/getBookById"

interface BookPageProps {
  params: {
    bookId: string;
  };
}

export default async function BookInfo({ params }: BookPageProps) {
    const book = await getBookById(Number(params.bookId))

  return (
    <div className="">
      <DisplayBookInfo book={book!} />
    </div>
  )
}