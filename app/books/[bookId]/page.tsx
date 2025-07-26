import { DisplayBookInfo } from '@/components/book-page/displayBookInfo';
import { getBookById } from "@/lib/getBookById";

interface BookPageProps {
  params: {
    bookId: string; // plain string, no Promise
  };
}

export default async function BookInfo({ params }: BookPageProps) {
  const bookid = Number(params.bookId);
  const book = await getBookById(bookid);

  return (
    <div>
      <DisplayBookInfo book={book!} />
    </div>
  );
}
