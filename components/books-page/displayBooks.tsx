import { BookAuthorPair } from "@/types/book"
import Image from "next/image"

export const BooksDisplay = ({ books }: { books: BookAuthorPair[] }) =>{
    return(
        <div className="flex flex-wrap justify-between gap-x-10 pt-10 ">
        {books.map((pair, key) => (
          <div key={key} className="flex flex-col max-w-[150px] mb-10 cursor-pointer">
            <Image
              width={150}
              height={250}
              src={pair.books.cover_pic}
              alt={pair.books.title}
              className="h-[250px] w-auto object-cover rounded-md"
            />
            <p className="font-bold text-sm mt-2">{pair.books.title}</p>
            <p className="text-xs text-muted-foreground">
              by {pair.authors.firstname}{" "}
              {pair.authors.middlename ? `${pair.authors.middlename} ` : ""}
              {pair.authors.lastname}
            </p>
          </div>
        ))}
      </div>
    )
}