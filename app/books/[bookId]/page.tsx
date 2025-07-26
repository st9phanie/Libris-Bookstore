import { DisplayBookInfo } from '@/components/book-page/displayBookInfo';
import { getBookById } from "@/lib/getBookById";

type Params = Promise<{ bookId: string }>

export default async function BookInfo({params}: { params: Params }) {
  const {bookId} = await params
  const bookid = Number(bookId);
  const book = await getBookById(bookid);

  return (
    <div>
      <DisplayBookInfo book={book!} />
    </div>
  );
}
