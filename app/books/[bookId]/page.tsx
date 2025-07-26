import { DisplayBookInfo } from '@/components/book-page/displayBookInfo';
import { getBookById } from "@/lib/getBookById";

export default async function BookInfo({
  params,
}: {
  params: { bookId: string };
}) {
  const bookId = Number(params.bookId);
  const book = await getBookById(bookId);

  return (
    <div>
      <DisplayBookInfo book={book!} />
    </div>
  );
}
