import { BookAuthorGenre } from "@/types/book"
import Image from "next/image"
import { bookDetails } from "./bookDetails";
import { Rating, RatingButton } from '@/components/ui/shadcn-io/rating/index';

export const DisplayBookInfo = async ({ book }: { book: BookAuthorGenre }) => {
    const bookInfo = bookDetails(book);

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
        <div className="px-10 py-12 h-full bg-white ">
            <div className="flex flex-row h-full items-stretch gap-x-10">
                <Image
                    src={book!.cover_pic}
                    width={300}
                    height={350}
                    alt="cover pic"
                    className="w-[300px] h-[400px] object-cover rounded-sm shadow-md "
                />
                <div className="flex flex-col justify-between ">
                    <div>
                        <p className="text-2xl font-bold ">{book!.title}</p>
                        <p className="text-gray-500 italic  ">By {fullname}</p>
                        <Rating defaultValue={3} readOnly>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <RatingButton key={index} className="text-[#0F99BB]" />
                            ))}
                        </Rating>
                        <hr className="my-4 border-gray-300  " />

                    </div>

                    <p className="text-sm  whitespace-pre-line "> {book!.overview}</p>

                    <div className="flex flex-row items-center mt-4">
                        <p className="mr-2 ">Genres: </p>
                        {book.bookGenres.map((genre, key) => (
                            <span className="bg-[#0F99BB] text-white text-xs font-medium px-2.5 py-1 cursor-pointer mr-2 rounded-full capitalize text-center" key={key}>{genre.genres.genre}</span>
                        ))}

                    </div>

                    <div className="flex flex-col ">
                        <hr className="my-4 border-gray-300" />
                        <div className="flex flex-row justify-between items-center max-w-120 text-xs gap-x-10 ">
                            {bookInfo.map(({ label, icon, value }) => (
                                <div key={label} className="flex flex-col items-center justify-between gap-y-1 max-h-50 min-h-max ">
                                    <p>{label}</p>
                                    {icon}
                                    <p className="font-semibold ">{value}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
                <div className="min-h-max bg-white min-w-60 border shadow flex flex-col items-center">
                    <p className="mt-4">Price: </p>
                    <p className="text-xl font-semibold ">${book.price}</p>
                    <div className="flex flex-col gap-y-2 mt-4">
                        <button className="bg-[#0F99BB] text-white p-2 w-40 rounded-full ">Add to Cart</button>
                        <button className="bg-[#142934] text-white p-2 w-40 rounded-full">Buy Now</button>
                    </div>

                </div>
            </div>
            <hr className="mb-4 mt-10 border-gray-300" />

        </div>
    )
}