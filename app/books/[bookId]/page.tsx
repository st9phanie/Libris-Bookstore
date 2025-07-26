import { DisplayBookInfo } from '@/components/book-page/displayBookInfo';
import { getBookById } from "@/lib/getBookById";

interface BookPageProps {
  params: {
    bookId: Promise<string | null>;
  };
}

export default async function BookInfo(props: BookPageProps) {
  const {bookId} = await props.params;
  const bookid= Number(bookId)
  const book = await getBookById(bookid);

  return (
    <div className="">
      <DisplayBookInfo book={book!} />
    </div>
  );
}
