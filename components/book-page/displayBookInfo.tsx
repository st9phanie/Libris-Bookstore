import { BookAuthorGenre } from "@/types/book"
import Image from "next/image"

export const DisplayBookInfo = async ({ book }: { book: BookAuthorGenre }) => {
    function getAuthorFullName() {
        const authors = book!.bookAuthor;
        return authors
            .map(author => {
                const a = author.authors;
                return [a.firstname, a.middlename, a.lastname].filter(Boolean).join(" ");
            })
            .join(", ");
    }
    const fullname = getAuthorFullName()

    return (
        <div className="px-10 py-8 ">
            <div className="flex flex-row gap-x-10">
                <div>
                    <Image
                        src={book!.cover_pic}
                        width={280}
                        height={300}
                        alt="cover pic"
                    />
                </div>
                <div>
                    <p className="text-2xl ">{book!.title}</p>
                    <p>By {fullname}</p>
                </div>
            </div>
        </div>
    )
}