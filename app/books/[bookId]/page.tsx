import { DisplayBookInfo } from '@/components/book-page/displayBookInfo';
import { getBookById } from "@/lib/getBookById";

type Params = Promise<{ bookId: string }>

export default async function BookInfo(props: { params: Params }) {
  const params = await props.params;

  const bookid = Number(params.bookId);
  const book = await getBookById(bookid);

  return (
    <div>
      <DisplayBookInfo book={book!} />
    </div>
  );
}
