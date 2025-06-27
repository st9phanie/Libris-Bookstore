import { BookAuthorGenre } from "@/types/book"
import Image from "next/image"

export const BooksDisplay = ({ books }: { books: BookAuthorGenre[] }) =>{
    return(
        <div className="flex flex-wrap gap-x-16 pt-10 ">
        {books.map((pair, key) => (
          <div key={key} className="flex flex-col max-w-[150px] mb-10 cursor-pointer">
            <Image
              width={150}
              height={250}
              src={pair.cover_pic}
              alt={pair.title}
              className="h-[250px] w-auto object-cover rounded-md"
            />
            <p className="font-bold text-sm mt-2">{pair.title}</p>
            {pair.bookAuthor.map((author, key) => (
                  <p key={key} className="text-xs text-gray-600">
                    {author.authors.firstname} {author.authors.middlename} {author.authors.lastname}
                  </p>
                ))

                }
          </div>
        ))}
      </div>
    )
}